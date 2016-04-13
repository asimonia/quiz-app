/* question manager */
qManager = {
	currentNum : 0,
	correctPoints : 0,
	currentAnswer: null,
	questions : loadQuestions(),
	checkAnswer : function() {
		alert(this.currentAnswer);
	},
	showQuestion : function() {

		var currQuestion = this.questions[this.currentNum];
		var questionPics = currQuestion.pics;
		var questionAnswer = currQuestion.answer;
		
		this.currentAnswer = questionAnswer;

		// Question # 1 of 5
		$('.header').find('#cur_quest_num').text(this.currentNum + 1);
		$('.header').find('#total_quest_count').text(this.questions.length);

		// Pictures 1 to 4
		for (var i = 0; i < questionPics.length; i++) {
			$('.pictures')
			.append('<div class="entry"><figure><img src=' + questionPics[i] + '></figure></div>');
		};

		// Letters 1 to 10
		var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var questionAnswerLen = questionAnswer.length;
		
		// Append random letters to the answer to create a 12 letter string
		for (var i = 0; i < 10 - questionAnswerLen; i++) {
			questionAnswer += letters[Math.floor((Math.random() * 26))];
		};

		// Function to shuffle string
		String.prototype.shuffle = function () {
    		var a = this.split(""),
        	n = a.length;

    		for(var i = n - 1; i > 0; i--) {
        		var j = Math.floor(Math.random() * (i + 1));
        		var tmp = a[i];
        		a[i] = a[j];
        		a[j] = tmp;
    		};

    		return a.join("");
		};	

		// Shuffle the 12 letter string to create a randomize pool of letters
		questionAnswer = questionAnswer.shuffle();

		// Create the pool of letter choices
		for (var i = 0; i < questionAnswer.length; i++) {
			$('.guessBox')
			.append('<li>' + questionAnswer[i] + '</li>');
		};
	}
};

$(document).ready(function () {
	qManager.showQuestion();
	qManager.checkAnswer();
});