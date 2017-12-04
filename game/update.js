

function update() {
    deltaTime = game.time.elapsed/10;
    var motion = 0;
    var change = 0;
    if (this.cursors.left.isDown && !this.activeEvent && !this.activeMessage) {
        this.messageText = game.add.bitmapText(50, 300, 'pfont', this.backMessages[Math.floor(Math.random()*this.backMessages.length)],24);
        this.activeMessage = 1;
    }
    if (this.cursors.right.isDown && !this.activeEvent && !this.gameOver) {
        motion = 1;
        this.idle = 0;
        this.ground.tilePosition.x -= 2.2 * 1 * deltaTime;
        this.timelinePosition += 0.01 * deltaTime;
        this.dudy.animations.play('walk', 10, true);
        //console.log(this.timelinePosition);
        if(this.timelinePosition > this.month + 1){
            if (typeof this.messageText != 'undefined') {
                this.messageText.destroy();
            }

            this.activeMessage = 0;
            this.month ++;
            this.activeEvent = 1;
            this.aEvent = this.eventsCol[Math.floor(Math.random()*this.eventsCol.length)];
            this.aEvent.generateAnswers(this.aState);
            //console.log(this.aEvent);
            this.titleText = game.add.bitmapText(50, 200, 'pfont', this.aEvent.title,48);
            this.ans1 = game.add.bitmapText(50, 250, 'pfont', "1. " + this.aEvent.possibleAnswers[0].title,32);
            this.ans2 = game.add.bitmapText(50, 290, 'pfont', "2. " + this.aEvent.possibleAnswers[1].title,32);
            this.ans3 = game.add.bitmapText(50, 330, 'pfont', "3. " + this.aEvent.possibleAnswers[2].title,32);
        }

    }
    if (this.One.isDown && this.activeEvent) {
        this.aState.change(this.aEvent.possibleAnswers[0].effect);
        //console.log(this.aState);
        this.activeEvent = 0;
        this.titleText.destroy();
        this.ans1.destroy();
        this.ans2.destroy();
        this.ans3.destroy();
        change = 1;
    }
    if (this.Two.isDown && this.activeEvent) {
        this.aState.change(this.aEvent.possibleAnswers[1].effect);
        //console.log(this.aState);
        this.activeEvent = 0;
        this.titleText.destroy();
        this.ans1.destroy();
        this.ans2.destroy();
        this.ans3.destroy();
        change = 1;
    }
    if (this.Three.isDown && this.activeEvent) {
        this.aState.change(this.aEvent.possibleAnswers[2].effect);
        //console.log(this.aState);
        this.activeEvent = 0;
        this.titleText.destroy();
        this.ans1.destroy();
        this.ans2.destroy();
        this.ans3.destroy();
        change = 1;
    }
    if (!motion && !this.gameOver) {
        if (!this.idle) {
            this.dudy.animations.play('idle', 2, true);
            this.idle = 1;
        }
    }
    if(this.first || change){
        if(!this.first){
            this.drinking.destroy();
            this.smoking.destroy();
            this.social.destroy();
            this.gambling.destroy();
            this.nightlife.destroy();
        }

        this.first = 0;

        this.ageText.destroy();
        this.ageText = game.add.bitmapText(600, 510, 'pfont', "Age: "+(21+Math.floor(this.month/3)),64);
        this.drinking = game.add.sprite(100, 100, 'drinking');
        this.drinking.anchor.setTo(.5, 1);
        this.drinking.smoothed = false;
        this.drinking.scale.x = 3;
        this.drinking.scale.y = 3;
        this.drinking.frame = Math.floor(this.aState.drinking/25);


        this.smoking = game.add.sprite(250, 100, 'smoking');
        this.smoking.anchor.setTo(.5, 1);
        this.smoking.smoothed = false;
        this.smoking.scale.x = 3;
        this.smoking.scale.y = 3;
        this.smoking.frame = Math.floor(this.aState.smoking/25);


        this.social = game.add.sprite(400, 100, 'social');
        this.social.anchor.setTo(.5, 1);
        this.social.smoothed = false;
        this.social.scale.x = 3;
        this.social.scale.y = 3;
        this.social.frame = Math.floor(this.aState.social/25);


        this.gambling = game.add.sprite(550, 100, 'gambling');
        this.gambling.anchor.setTo(.5, 1);
        this.gambling.smoothed = false;
        this.gambling.scale.x = 3;
        this.gambling.scale.y = 3;
        this.gambling.frame = Math.floor(this.aState.gambling/25);


        this.nightlife = game.add.sprite(700, 100, 'nightlife');
        this.nightlife.anchor.setTo(.5, 1);
        this.nightlife.smoothed = false;
        this.nightlife.scale.x = 3;
        this.nightlife.scale.y = 3;
        this.nightlife.frame = Math.floor(this.aState.nightlife/25);

        if(change){
            if(this.aState.drinking > 85){
                this.titleText = game.add.bitmapText(200, 200, 'pfont', "Life Over!",48);
                this.ans1 = game.add.bitmapText(20, 250, 'pfont', this.dOver[Math.floor(Math.random()*this.dOver.length)],24);
                this.gameOver = 1;
            }
            if(this.aState.smoking > 85){
                this.titleText = game.add.bitmapText(200, 200, 'pfont', "Life Over!",48);
                this.ans1 = game.add.bitmapText(20, 250, 'pfont', this.sOver[Math.floor(Math.random()*this.sOver.length)],24);
                this.gameOver = 1;
            }
            if(this.aState.social > 85){
                this.titleText = game.add.bitmapText(200, 200, 'pfont', "Life Over!",48);
                this.ans1 = game.add.bitmapText(20, 250, 'pfont', this.mOver[Math.floor(Math.random()*this.mOver.length)],24);
                this.gameOver = 1;
            }
            if(this.aState.gambling > 85){
                this.titleText = game.add.bitmapText(200, 200, 'pfont', "Life Over!",48);
                this.ans1 = game.add.bitmapText(20, 250, 'pfont', this.gOver[Math.floor(Math.random()*this.gOver.length)],24);
                this.gameOver = 1;
            }
            if(this.aState.nightlife > 85){
                this.titleText = game.add.bitmapText(200, 200, 'pfont', "Life Over!",48);
                this.ans1 = game.add.bitmapText(20, 250, 'pfont', this.nOver[Math.floor(Math.random()*this.nOver.length)],24);
                this.gameOver = 1;
            }
            if(this.gameOver){
                //this.dudy.animations.stop(null, true);
                this.game.stage.backgroundColor = '#ff596b';
                this.dudy.animations.play('dead', 10, true);
                if (!this.activeMessage) {
                    this.messageText = game.add.bitmapText(50, 300, 'pfont', this.backMessages[Math.floor(Math.random()*this.backMessages.length)],24);
                    this.activeMessage = 1;
                }
            }
        }
    }
}