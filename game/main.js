var deltaTime=0;
var rand = function(min, max) {
    return Math.random() * (max - min) + min;
};

var getRandomItem = function(list) {
    var weight = Array();
    var sum=0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i].factor;
    }
    for (var i = 0; i < list.length; i++) {
        weight[i] = list[i].factor/sum;
    }
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });
    for (var i = 0; i < list.length; i++) {
        total_weight += list[i].factor;
    }
    var random_num = rand(0, total_weight);
    var weight_sum = 0;
    //console.log(random_num)

    for (var i = 0; i < list.length; i++) {
        weight_sum += list[i].factor;
        weight_sum = +weight_sum.toFixed(2);

        if (random_num <= weight_sum) {
            return list[i];
        }
    }
    return 0;
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var events = new Array();
function EventC(title, answers) {
    this.title = title;
    this.answers = answers;
    this.possibleAnswers = null;

    this.generateAnswers = EventCGenerate;
}
function EventCGenerate(state){
    for (var i = 0; i < this.answers.length; i++) {
        this.answers[i].generateFactor(state);
    }
    this.possibleAnswers = Array();
    var cnt = 0;
    while(cnt<3){
        if(cnt==0){
            this.possibleAnswers[cnt] = getRandomItem(this.answers);
            if(this.possibleAnswers[cnt] == 0){
                continue;
            }
            cnt++;
        } else {
            this.possibleAnswers[cnt] = getRandomItem(this.answers);
            if(this.possibleAnswers[cnt] == 0){
                continue;
            }
            if(this.possibleAnswers[cnt].id == this.possibleAnswers[0].id){
                continue;
            } else{
                if(cnt==2){
                    if(this.possibleAnswers[cnt].id == this.possibleAnswers[1].id){
                        continue;
                    }
                }
            }
            cnt++;
        }
    }
    //this.possibleAnswers = this.answers;
}
function EventsCategory() {

}
function Effect(drinking, smoking, social, gambling, nightlife){
    this.drinking = drinking;
    this.smoking = smoking;
    this.social = social;
    this.gambling = gambling;
    this.nightlife = nightlife;
}

function Answer(id, title, effect, sFactor){
    this.id = id;
    this.title = title;
    this.effect = effect;
    this.stateFactor = sFactor;
    this.factor = 0;

    this.generateFactor = AnswerGenerateFactor;
}
function AnswerGenerateFactor(state){
    this.factor = 1;
    this.factor += this.stateFactor.drinking * state.drinking;
    this.factor += this.stateFactor.smoking * state.smoking;
    this.factor += this.stateFactor.social * state.social;
    this.factor += this.stateFactor.gambling * state.gambling;
    this.factor += this.stateFactor.nightlife * state.nightlife;
}
function StateFactor(drinking, smoking, social, gambling, nightlife) {
    this.drinking = drinking;
    this.smoking = smoking;
    this.social = social;
    this.gambling = gambling;
    this.nightlife = nightlife;
}
function DudyStates(drinking, smoking, social, gambling, nightlife) {
    this.drinking = drinking;
    this.smoking = smoking;
    this.social = social;
    this.gambling = gambling;
    this.nightlife = nightlife;

    this.change = DudyStatesChange;
}

function DudyStatesChange(effect) {
    this.drinking += effect.drinking;
    this.smoking += effect.smoking;
    this.social += effect.social;
    this.gambling += effect.gambling;
    this.nightlife += effect.nightlife;

    if(this.drinking<=0){
        this.drinking=1;
    }
    if(this.smoking<=0){
        this.smoking=1;
    }
    if(this.social<=0){
        this.social=1;
    }
    if(this.gambling<=0){
        this.gambling=1;
    }
    if(this.nightlife<=0){
        this.nightlife=1;
    }
}
