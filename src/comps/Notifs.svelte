<!-- @format -->
<script lang="ts">
  import { notifs, addNotif, type Notif } from "../stores/notifs";

  let notifsVal: Notif[] = [];

  const successEmojis = ["🎉", "👍", "👌", "👏", "🙌", "🤙", "🤘", "🤟", "👊"];
  const errorEmojis = ["😢", "😭", "😞", "😔", "😟", "😕", "🙁", "🤷‍♂️", "😣"];
  const successMessages = ["correct", "noice", "good job", "awesome"];
  const errorMessages = ["wrong", "nope", "try again", "not quite"];

  let lastEmoji = "";
  let lastMessage = "";

  function getEmoji(type: "success" | "error") {
    const emojis = (type === "success" ? successEmojis : errorEmojis).filter(
      (e) => e !== lastEmoji
    );
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    lastEmoji = emoji;
    return emoji;
  }

  function getMessage(type: "success" | "error") {
    const messages = (
      type === "success" ? successMessages : errorMessages
    ).filter((e) => e !== lastMessage);
    const message = messages[Math.floor(Math.random() * messages.length)];
    lastMessage = message;
    return message;
  }

  notifs.subscribe((val) => {
    notifsVal = val;
  });
</script>

<div class="">
  {#each notifsVal as notif, index}
    <div
      class="fixed top-4 bg-white border p-2 inset-x-0 max-w-[120px] text-xs rounded-xl mx-auto text-center"
    >
      <span>{getEmoji(notif.type)}</span>
      <span>{getMessage(notif.type)}</span>
    </div>
  {/each}
</div>
