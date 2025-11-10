export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  try {
    const response = await fetch("https://api.attio.com/v2/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ATTIO_API_KEY}`,
      },
      body: JSON.stringify({
        object: "person",
        fields: {
          email_addresses: [{ email }],
          tags: ["Waitlist"],
        },
      }),
    });

    if (!response.ok) throw new Error("Failed to create record");

    return res.status(200).json({ message: "Added to waitlist!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
