import { google } from "googleapis";
import { NextResponse } from "next/server";

type ContactPayload = {
  inquiryType?: string;
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

type ValidContactPayload = Required<ContactPayload>;

const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
  "inquiryType",
  "company",
  "name",
  "phone",
  "email",
  "message",
];

function hasRequiredFields(payload: ContactPayload): payload is ValidContactPayload {
  return REQUIRED_FIELDS.every((field) => {
    const value = payload[field];
    return typeof value === "string" && value.trim().length > 0;
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (!hasRequiredFields(payload)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const inquiry = {
      inquiryType: payload.inquiryType.trim(),
      company: payload.company.trim(),
      name: payload.name.trim(),
      phone: payload.phone.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
    };

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:H",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            inquiry.inquiryType,
            inquiry.company,
            inquiry.name,
            inquiry.phone,
            inquiry.email,
            inquiry.message,
            "신규",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to append contact inquiry to Google Sheets:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
