const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'remove',
  description: 'remove the player!',
  userPermission: ["Administrator"],
  inVc: true,
  sameVc: true,
  player: true,
  options: [
    {
      name: 'track',
      description: 'Remove a track from the queue.',
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 1,
    },
  ],
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);
    const track = interaction.options.getNumber('track');

    if (track > player.queue.length) {
      const embed = new EmbedBuilder()
        .setColor('#f7bd3fe')
        .setDescription('Track not found');

      return interaction.reply({ embeds: [embed] });
    }

    player.queue.remove(track - 1);

    const embed = new EmbedBuilder()
      .setColor('#f7bd3f')
      .setDescription('Removed track from queue');

    return interaction.reply({ embeds: [embed] });
  },
};
