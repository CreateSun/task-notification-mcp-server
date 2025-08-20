import notifier from "node-notifier";
import { DEFAULT_NOTIFICATION_SOUND } from "./constants.js";
export async function sendNotification(title, message, sound = DEFAULT_NOTIFICATION_SOUND.Funk) {
    return new Promise((resolve, reject) => {
        notifier.notify({
            sound: sound,
            title: title || "",
            message: message || "No message",
        }, (err, response, metadata) => {
            if (err) {
                reject(err);
            }
            resolve(response);
        });
    });
}
export function getSound({ sound, random, }) {
    if (random) {
        return getRandomSound();
    }
    return sound;
}
function getRandomSound() {
    const sounds = Object.values(DEFAULT_NOTIFICATION_SOUND);
    return sounds[Math.floor(Math.random() * sounds.length)];
}
