import { NextResponse } from "next/server"
import puppeteer from "puppeteer"

export async function GET() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  })

  try {
    const page = await browser.newPage()

    // URL de la page slides à exporter
    const targetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/slides`

    await page.goto(targetUrl, {
      waitUntil: "networkidle0",
    })

    // Optionnel : forcer un fond blanc
    await page.emulateMediaType("screen")

    const pdfUint8 = await page.pdf({
      format: "A4",
      printBackground: true,
    })

    const pdfBuffer = pdfUint8.buffer.slice(
      pdfUint8.byteOffset,
      pdfUint8.byteOffset + pdfUint8.byteLength
    ) as BodyInit

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="slides.pdf"',
      },
    })
  } catch (error) {
    console.error("PDF generation error:", error)
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    )
  } finally {
    await browser.close()
  }
}
