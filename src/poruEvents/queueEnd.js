module.exports.run = (client, player) => {
    setTimeout(function() {
        return player.destroy();
    }, 120000);
};