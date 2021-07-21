function randomQuestion() {
	document.getElementById("randomQuestionText").innerHTML= returnRandQuestion();
};

const returnRandQuestion = () => {
	const questions = [
		"Which residence was the location of Mary's marriages to her second and third husbands, and the scene of the murder of her secretary David Rizzio?", 
		"Having been a prisoner there for over ten months, in 1568 Mary escaped from which Scottish castle, aided by members of her captor's family?", 
		"Almost entirely demolished in the 17th century, which castle in Northamptonshire was the scene of Mary's trial and execution?",
		]
	return questions[Math.floor(Math.random() * 3)] 
  }

function randomAnswers() {
	document.getElementById("randomAnswersText").innerHTML= returnRandAnswer();
};

const returnRandAnswer = () => {
	const answers1 = [
		"Buckingham Palace", 
		"Clarence House", 
		"Balmoral", 
		"Tamarisk House", 
		"Frogmore Cottage", 
		]
	const answers2 = [
		"Hillsborough Castle", 
		"St James's Palace", 
		"Ivy Cottage", 
		"Wren House", 
		"Birkhall", 
		]

	if (document.getElementById("randomQuestionText").innerHTML === "Which residence was the location of Mary's marriages to her second and third husbands, and the scene of the murder of her secretary David Rizzio?") {
		return `Could it be ${answers1[Math.floor(Math.random() * 5)]}?, or Holyrood House, or maybe ${answers2[Math.floor(Math.random() * 5)]}?`
	} if (document.getElementById("randomQuestionText").innerHTML === "Having been a prisoner there for over ten months, in 1568 Mary escaped from which Scottish castle, aided by members of her captor's family?") {
		return `Could it be ${answers1[Math.floor(Math.random() * 5)]}?, or ${answers2[Math.floor(Math.random() * 5)]}, or maybe Lochleven Castle?`
	} if (document.getElementById("randomQuestionText").innerHTML === "Almost entirely demolished in the 17th century, which castle in Northamptonshire was the scene of Mary's trial and execution?") {
		return `Could it be Fotheringay Castle?, or ${answers2[Math.floor(Math.random() * 5)]}, or maybe ${answers1[Math.floor(Math.random() * 5)]}?`
	}
}

function correctAnswer() {
	document.getElementById("correctAnswerText").innerHTML= returnCorrectAnswer();
};

const returnCorrectAnswer = () => {
	if (document.getElementById("randomQuestionText").innerHTML === "Which residence was the location of Mary's marriages to her second and third husbands, and the scene of the murder of her secretary David Rizzio?") {
		return "Holyrood House"
	} if (document.getElementById("randomQuestionText").innerHTML === "Having been a prisoner there for over ten months, in 1568 Mary escaped from which Scottish castle, aided by members of her captor's family?") {
		return "Locheven Castle"
	} if (document.getElementById("randomQuestionText").innerHTML === "Almost entirely demolished in the 17th century, which castle in Northamptonshire was the scene of Mary's trial and execution?") {
		return "Fotheringay Castle"	
	}
}		
