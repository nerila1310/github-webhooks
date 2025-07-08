import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message
      // embeds: [
      //   {
      //     image: {
      //       url:
      //         "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjdpZHZhN2p2OW42MmFwd2Zla2FhaTZ4MHQ5N2lkODJmcmR3ZmQwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif"
      //     }
      //   }
      // ]
    };

    const res = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      console.log("Error sending message to Discord");
      return false;
    }

    return true;
  }
}
