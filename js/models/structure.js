class Structure {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;

        this.structureSprite = new Image();
        this.structureSprite.src = 'img/sprites/structures.png';
        this.structureSprite.isReady = false;
        this.structureSprite.horizontalFrames = 4;
        this.structureSprite.verticalFrames = 1;
        this.structureSprite.horizontalFrameIndex = 0;
        this.structureSprite.verticalFrameIndex = 0;
        this.structureSprite.onload = () => {
            this.structureSprite.isReady = true;
            this.structureSprite.frameWidth = Math.floor(this.structureSprite.width / this.structureSprite.horizontalFrames);
            this.structureSprite.frameHeight = Math.floor(this.structureSprite.height / this.structureSprite.verticalFrames);
            this.width = this.structureSprite.frameWidth;
            this.height = this.structureSprite.frameHeight;
        }

        this.drawCount = 0;
    }

    draw() {
        if (this.structureSprite.isReady) {
            this.ctx.drawImage(
                this.structureSprite,
                this.structureSprite.frameWidth * this.structureSprite.horizontalFrameIndex,
                this.structureSprite.frameHeight * this.structureSprite.verticalFrameIndex,
                this.structureSprite.frameWidth,
                this.structureSprite.frameHeight,
                this.x,
                this.y,
                this.width,
                this.height
            )
            /* this.ctx.strokeRect(this.x, this.y, this.width, this.height) */
        }
        this.drawCount++;

    }

    collides(element) {
        return this.x + this.width > element.x + 30 &&
            this.x < element.x + element.ballSprite.width - 30 &&
            this.y + this.height > element.y + 30 &&
            this.y < element.y + element.ballSprite.height - 30;
            
    }
}