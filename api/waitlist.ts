export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const response = await fetch("https://api.attio.com/v2/objects/people/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer e8d6a2a654c9c28378e709f0adf2328af2ca0310b14c4a4be2ff79472e8b51cd`,
      },
      body: JSON.stringify({
        data: {
          update_if_exists: true, // Upsert logic ✅
          values: {
            email_addresses: [{ email_address: email }], // ✅ Correct key
            tags: ["Waitlist"], // ✅ Works now that Waitlist exists
          },
        },
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      console.error("Attio API response:", text);
      throw new Error(`Failed to create or update record: ${text}`);
    }

    // You could parse it if you want to return the record link:
    const { data } = JSON.parse(text);
    const personUrl = data?.web_url || null;

    return res.status(200).json({
      message: "Upserted into Attio waitlist!",
      attio_url: personUrl,
    });
  } catch (err) {
    console.error("Attio error:", err);
    return res.status(500).json({ message: "Something went wrong." });
  }
}






