export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Helvetica";
  }
  draw(context) {
    context.save();
    context.shadowOffsetX = 0.5;
    context.shadowOffsetY = 0.5;
    context.shadowColor = "red";
    context.shadowBlur = 0;
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    //score
    context.fillText("Score: " + this.game.score, 20, 50);
    // timer
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
    // game over messages
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      if (this.game.score > 50) {
        context.fillText(
          "Nice!",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
      } else {
        context.fillText(
          "Fail!!",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
      }
    }
    context.restore();
  }
}
