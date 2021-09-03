function segments(message) {
  if (message.length <= 160) {
    return [message];
  }

  let totalSMS = Math.ceil(message.length / 155);
  let words = message.split(" ");

  let messages = [];

  let currentMessage = "";
  let count = 1;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (i === words.length - 1) {
      currentMessage += word;
      currentMessage += `(${count}/${totalSMS})`;
      messages.push(currentMessage);

      continue;
    }

    if (currentMessage.length + word.length > 155) {
      currentMessage += `(${count}/${totalSMS})`;
      messages.push(currentMessage);
      currentMessage = word + " ";
      count++;
    } else {
      currentMessage += word;
      if (currentMessage.length > 154) {
        currentMessage += `(${count}/${totalSMS})`;
        messages.push(currentMessage);
        currentMessage = " ";
        count++;
      } else {
        currentMessage += " ";
      }
    }
  }

  return messages;
}

console.log(
  segments(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus"
  )
);
