$(document).ready(function() {
	let januaryArray = [
		'&ldquo;Hope smiles from the threshold of the year to come, whispering, &lsquo;It will be happier.&rsquo;&rdquo; <br /> &mdash;Alfred Lord Tennyson',
		'&ldquo;You must do the things you think you cannot do.&rdquo; <br /> &mdash;Eleanor Roosevelt',
		'&ldquo;To succeed in your mission, you must have single-minded devotion to your goal.&rdquo; <br /> &mdash;A. P. J. Abdul Kalam',
		'&ldquo;It&rsquo;s easier to resist at the beginning than at the end.&rdquo; <br /> &mdash;Leonardo da Vinci',
		'&ldquo;I love you &ndash; I am at rest with you &ndash; I have come home.&rdquo; <br /> &mdash;Dorothy L. Sayers',
		'&ldquo;If you do not change direction, you may end up where you are heading.&rdquo; <br /> &mdash;Lao Tzu',
		'&ldquo;The opportunity is often lost by deliberating.&rdquo; <br /> &mdash;Publilius Syrus',
		'&ldquo;Common sense is not so common.&rdquo; <br /> &mdash;Voltaire',
		'&ldquo;A lie can travel half way around the world while the truth is putting on its shoes.&rdquo; <br /> &mdash;Charles Spurgeon',
		'&ldquo;To live happily is an inward power of the soul.&rdquo; <br /> &mdash;Marcus Aurelius',
		'&ldquo;To a smart girl men are no problem &ndash; they&rsquo;re the answer.&rdquo; <br /> &mdash;Zsa Zsa Gabor',
		'&ldquo;Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.&rdquo; <br /> &mdash;Washington Irving',
		'&ldquo;Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.&rdquo; <br /> &mdash;Francis of Assisi',
		'&ldquo;Facts are stubborn, but statistics are more pliable.&rdquo; <br /> &mdash;Mark Twain',
		'&ldquo;Love dies only when growth stops.&rdquo; <br /> &mdash;Pearl S. Buck',
		'&ldquo;A happy life is one spent in learning, earning, and yearning.&rdquo; <br /> &mdash;Lillian Gish',
		'&ldquo;But what is happiness except the simple harmony between a man and the life he leads?&rdquo; <br /> &mdash;Albert Camus',
		'&ldquo;I am no bird; and no net ensnares me; I am a free human being with an independent will.&rdquo; <br /> &mdash;Charlotte Bronte',
		'&ldquo;We would accomplish many more things if we did not think of them as impossible.&rdquo; <br /> &mdash;Vince Lombardi',
		// '&ldquo; &rdquo; <br /> &mdash; ',
		'Quote #20'
    ]

	let date = new Date()

	let day = date.getDay()
	let dayOfWeek = ''
	if (day === 0) {
		dayOfWeek = 'Sunday'
	} else if (day === 1) {
		dayOfWeek = 'Monday'
	} else if (day === 2) {
		dayOfWeek = 'Tuesday'
	} else if (day === 3) {
		dayOfWeek = 'Wednesday'
	} else if (day === 4) {
		dayOfWeek = 'Thursday'
	} else if (day === 5) {
		dayOfWeek = 'Friday'
	} else if (day === 6) {
		dayOfWeek = 'Saturday'
	}

	let month = date.getMonth()
	let monthOfYear = ''
	let monthArray = []
	if (month === 0) {
		monthOfYear = 'January'
		monthArray = januaryArray
	} else if (month === 1) {
		monthOfYear = 'February'
		monthArray = februaryArray
	} else if (month === 2) {
		monthOfYear = 'March'
		monthArray = marchArray
	} else if (month === 3) {
		monthOfYear = 'April'
		monthArray = aprilArray
	} else if (month === 4) {
		monthOfYear = 'May'
		monthArray = mayArray
	} else if (month === 5) {
		monthOfYear = 'June'
		monthArray = juneArray
	} else if (month === 6) {
		monthOfYear = 'July'
		monthArray = julyArray
	} else if (month === 7) {
		monthOfYear = 'August'
		monthArray = augustArray
	} else if (month === 8) {
		monthOfYear = 'September'
		monthArray = septemberArray
	} else if (month === 9) {
		monthOfYear = 'October'
		monthArray = octoberArray
	} else if (month === 10) {
		monthOfYear = 'November'
		monthArray = novemberArray
	} else if (month === 11) {
		monthOfYear = 'December'
		monthArray = decemberArray
	}

	let dayOfMonth = date.getDate()

	let year = date.getFullYear()

	let dayOfYear = `<h2>${dayOfWeek}, <br /> ${monthOfYear} ${dayOfMonth}, ${year}</h2>`
	$('#dayOfYear').html(dayOfYear)

    let quote = monthArray[dayOfMonth - 1]

	let quoteOfYear = `<h3>${quote}</h3>`
	$('#quoteOfYear').html(quoteOfYear)
})
