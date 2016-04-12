var question1 = {
	pics: ["images/q1a.jpg", "images/q1b.jpg", "images/q1c.jpg", "images/q1d.jpg"],
	answer: "sign"
};

var question2 = {
	pics: ["images/q2a.jpg", "images/q2b.jpg", "images/q2c.jpg", "images/q2d.jpg"],
	answer: "soft"
};

var question3 = {
	pics: ["images/q3a.jpg", "images/q3b.jpg", "images/q3c.jpg", "images/q3d.jpg"],
	answer: "hit"
};

var question4 = {
	pics: ["images/q4a.jpg", "images/q4b.jpg", "images/q4c.jpg", "images/q4d.jpg"],
	answer: "sweet"
};

var question5 = {
	pics: ["images/q5a.jpg", "images/q5b.jpg", "images/q5c.jpg", "images/q5d.jpg"],
	answer: "stink"
};

function loadQuestions(count) {
	var list = [question1, question2, question3, question4, question5];
	count || list.length;
	return list.slice(0, count);
}