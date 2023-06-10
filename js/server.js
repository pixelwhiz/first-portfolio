const Discord = require('discord.js');
const express = require('express');

const client = new Discord.Client({ intents: ['1010410818615115856', '862328459706236948'] });
const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
  const guildId = '862328459706236948'; // Ganti dengan ID Guild Anda
  const memberId = '1010410818615115856'; // Ganti dengan ID Member/Bot yang ingin Anda lacak

  const guild = client.guilds.cache.get(guildId);
  const member = guild.members.cache.get(memberId);

  if (member && member.presence && member.presence.status) {
    const status = member.presence.status;
    res.json({ status });
  } else {
    res.status(404).json({ error: 'Member not found' });
  }
});

client.login('MTExNDkwNzU4OTAxMzE0MzU3Mg.GAD4ln.SS6FJGq6guo3VGn_8cxc5uncZmimr2Rjl35JLw'); // Ganti dengan token bot Anda

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
