$(document).ready(function() {
	let novemberArray = [
		//'&ldquo; &rdquo; <br /> &mdash; ',
		'&ldquo;November 1 Quote&rdquo; <br /> &mdash;Attribution'
	]

	let octoberArray = [
		'&ldquo;We are all here on earth to help others; what on earth the others are here for I don&rsquo;t know.&rdquo; <br /> &mdash;W. H. Auden',
		'&ldquo;Just because something doesn&rsquo;t do what you planned it to do doesn&rsquo;t mean it&rsquo;s useless.&rdquo; <br /> &mdash;Thomas A. Edison',
		'&ldquo;Happiness is not something ready made. It comes from your own actions.&rdquo; <br /> &mdash;Dalai Lama',
		'&ldquo;Hope is patience with the lamp lit.&rdquo; <br /> &mdash;Tertullian',
		'&ldquo;If opportunity doesn&rsquo;t knock, build a door.&rdquo; <br /> &mdash;Milton Berle',
		'&ldquo;Every story I create, creates me. I write to create myself.&rdquo; <br /> &mdash;Octavia E. Butler',
		'&ldquo;The soul that is within me no man can degrade.&rdquo; <br /> &mdash;Frederick Douglass',
		'&ldquo;Love is the only force capable of transforming an enemy into a friend.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
		'&ldquo;Following the light of the sun, we left the Old World.&rdquo; <br /> &mdash;Christopher Columbus',
		'&ldquo;The world is round so that friendship may encircle it.&rdquo; <br /> &mdash;Pierre Teilhard de Chardin',
		'&ldquo;The smallest deed is better than the greatest intention.&rdquo; <br /> &mdash;John Burroughs',
		'&ldquo;Kind words do not cost much. Yet they accomplish much.&rdquo; <br /> &mdash;Blaise Pascal',
		'&ldquo;Greatness is a road leading towards the unknown.&rdquo; <br /> &mdash;Charles de Gaulle',
		'&ldquo;But he that dares not grasp the thorn should never crave the rose.&rdquo; <br /> &mdash;Anne Bronte',
		'&ldquo;I know not age, nor weariness nor defeat.&rdquo; <br /> &mdash;Rose Kennedy',
		'&ldquo;Life is the art of drawing without an eraser.&rdquo; <br /> &mdash;John W. Gardner',
		'&ldquo;Where there is no vision, there is no hope.&rdquo; <br /> &mdash;George Washington Carver',
		'&ldquo;I can, therefore I am.&rdquo; <br /> &mdash;Simone Weil',
		'&ldquo;Time is money.&rdquo; <br /> &mdash;Benjamin Franklin',
		'&ldquo;Writing, to me, is simply thinking through my fingers.&rdquo; <br /> &mdash;Isaac Asimov',
		'&ldquo;The reward for work well done is the opportunity to do more.&rdquo; <br /> &mdash;Jonas Salk',
		'&ldquo;There is nothing permanent except change.&rdquo; <br /> &mdash;Heraclitus',
		'&ldquo;Quality is everyone&rsquo;s responsibility.&rdquo; <br /> &mdash;W. Edwards Deming',
		'&ldquo;Out of difficulties grow miracles.&rdquo; <br /> &mdash;Jean de la Bruyere',
		'&ldquo;We loved with a love that was more than love.&rdquo; <br /> &mdash;Edgar Allan Poe',
		'&ldquo;Where is all the knowledge we lost with information?&rdquo; <br /> &mdash;T. S. Eliot',
		'&ldquo;A promise must never be broken.&rdquo; <br /> &mdash;Alexander Hamilton',
		'&ldquo;Research is creating new knowledge.&rdquo; <br /> &mdash;Neil Armstrong',
		'&ldquo;Despite everything, I believe that people are really good at heart.&rdquo; <br /> &mdash;Anne Frank',
		'&ldquo;The dog that trots about finds a bone.&rdquo; <br /> &mdash;Golda Meir',
		'&ldquo;We don&rsquo;t see things as they are, we see them as we are.&rdquo; <br /> &mdash;Anais Nin'
	]

	let septemberArray = [
		'&ldquo;A person who won&rsquo;t read has no advantage over one who can&rsquo;t read.&rdquo; <br /> &mdash;Mark Twain',
		'&ldquo;We cannot change anything until we accept it. Condemnation does not liberate, it oppresses.&rdquo; <br /> &mdash;Carl Jung',
		'&ldquo;You are the bows from which your children as living arrows are sent forth.&rdquo; <br /> &mdash;Khalil Gibran',
		'&ldquo;Opportunity is missed by most people because it is dressed in overalls and looks like work.&rdquo; <br /> &mdash;Thomas A. Edison',
		'&ldquo;Though we travel the world over to find the beautiful, we must carry it with us or we find it not.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
		'&ldquo;It is not in the stars to hold our destiny but in ourselves.&rdquo; <br /> &mdash;William Shakespeare',
		'&ldquo;I may not have gone where I intended to go, but I think I have ended up where I intended to be.&rdquo; <br /> &mdash;Douglas Adams',
		'&ldquo;Beware the fury of a patient man.&rdquo; <br /> &mdash;John Dryden',
		'&ldquo;Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.&rdquo; <br /> &mdash;Archimedes',
		'&ldquo;The past cannot be cured.&rdquo; <br /> &mdash;Elizabeth I',
		'&ldquo;Live as brave men; and if fortune is adverse, front its blows with brave hearts.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
		'&ldquo;The object of the superior man is truth.&rdquo; <br /> &mdash;Confucius',
		'&ldquo;If you can&rsquo;t convince them, confuse them.&rdquo; <br /> &mdash;Harry S. Truman',
		'&ldquo;The secret of business is to know something that nobody else knows.&rdquo; <br /> &mdash;Aristotle Onassis',
		'&ldquo;Nobody made a greater mistake than he who did nothing because he could do only a little.&rdquo; <br /> &mdash;Edmund Burke',
		'&ldquo;The best and most beautiful things in the world cannot be seen of even touched &ndash; they must be felt with the heart.&rdquo; <br /> &mdash;Helen Keller',
		'&ldquo;Rather fail with honor than succeed by fraud.&rdquo; <br /> &mdash;Sophocles',
		'&ldquo;Everything that is made beautiful and fair and lovely is made for the eye of one who sees.&rdquo; <br /> &mdash;Rumi',
		'&ldquo;You can find peace amidst the storms that threaten you.&rdquo; <br /> &mdash;Joseph B. Wirthlin',
		'&ldquo;Let us always meet each other with smile, for the smile is the beginning of love.&rdquo; <br /> &mdash;Mother Teresa',
		'&ldquo;Give me the luxuries of life and I will willingly do without the necessities.&rdquo; <br /> &mdash;Frank Lloyd Wright',
		'&ldquo;With the new day comes new strength and new thoughts.&rdquo; <br /> &mdash;Eleanor Roosevelt',
		'&ldquo;I often quote myself. It adds spice to my conversation.&rdquo; <br /> &mdash;George Bernard Shaw',
		'&ldquo;The science of today is the technology of tomorrow.&rdquo; <br /> &mdash;Edward Teller',
		'&ldquo;I believe things cannot make themselves impossible.&rdquo; <br /> &mdash;Stephen Hawking',
		'&ldquo;The past always looks better than it was. It&rsquo;s only pleasant because it isn&rsquo;t here.&rdquo; <br /> &mdash;Finley Peter Dunne',
		'&ldquo;A person&rsquo;s a person, no matter how small.&rdquo; <br /> &mdash;Dr. Seuss',
		'&ldquo;There are people who have money and people who are rich.&rdquo; <br /> &mdash;Coco Chanel',
		'&ldquo;Success seems to be largely a matter of hanging on after others have let go.&rdquo; <br /> &mdash;William Feather',
		'&ldquo;A champion is someone who gets up when he can&rsquo;t.&rdquo; <br /> &mdash;Jack Dempsey'
	]

	let augustArray = [
		'&ldquo;A single sunbeam is enough to drive away many shadows.&rdquo; <br /> &mdash;Francis of Assisi',
		'&ldquo;The aim of education is the knowledge, not of facts, but of values.&rdquo; <br /> &mdash;William S. Burroughs',
		'&ldquo;If we open a quarrel between past and present, we shall find that we have lost the future.&rdquo; <br /> &mdash;Winston Churchill',
		'&ldquo;A somebody was once a nobody who wanted to and did.&rdquo; <br /> &mdash;John Burroughs',
		'&ldquo;When ambition ends, happiness begins.&rdquo; <br /> &mdash;Thomas Merton',
		'&ldquo;The reward of suffering is experience.&rdquo; <br /> &mdash;Harry S. Truman',
		'&ldquo;We boil at different degrees.&rdquo; <br /> &mdash;Clint Eastwood',
		'&ldquo;When one must, one can.&rdquo; <br /> &mdash;Charlotte Whitton',
		'&ldquo;If we have no peace, it is because we have forgotten that we belong to each other.&rdquo; <br /> &mdash;Mother Teresa',
		'&ldquo;Unless someone like you cares a whole awful lot, nothing is going to get better. It&rsquo;s not.&rdquo; <br /> &mdash;Dr. Seuss',
		'&ldquo;Act as if what you do makes a difference. It does.&rdquo; <br /> &mdash;William James',
		'&ldquo;Sadness flies away on the wings of time.&rdquo; <br /> &mdash;Jean de La Fontaine',
		'&ldquo;If you want others to be happy, practice compassion. If you want to be happy, practice compassion.&rdquo; <br /> &mdash;Dalai Lama',
		'&ldquo;Happiness is a direction, not a place.&rdquo; <br /> &mdash;Sydney J. Harris',
		'&ldquo;Happiness is not a goal; it is a by-product.&rdquo; <br /> &mdash;Eleanor Roosevelt',
		'&ldquo;The question isn&rsquo;t who is going to let me; it&rsquo;s who is going to stop me.&rdquo; <br /> &mdash;Ayn Rand',
		'&ldquo;It&rsquo;s the friends you can call up at 4 a.m. that matter.&rdquo; <br /> &mdash;Marlene Dietrich',
		'&ldquo;The most I can do for my friend is simply be his friend.&rdquo; <br /> &mdash;Henry David Thoreau',
		'&ldquo;I&rsquo;d rather have roses on my table than diamonds on my neck.&rdquo; <br /> &mdash;Emma Goldman',
		'&ldquo;Nobody ever drowned in his own sweat.&rdquo; <br /> &mdash;Ann Landers',
		'&ldquo;Never apologize for showing feeling. When you do so, you apologize for the truth.&rdquo; <br /> &mdash;Benjamin Disraeli',
		'&ldquo;It is amazing how complete is the delusion that beauty is goodness.&rdquo; <br /> &mdash;Leo Tolstoy',
		'&ldquo;People are not disturbed by things, but by the view they take of them.&rdquo; <br /> &mdash;Epictetus',
		'&ldquo;I have never met a man so ignorant that I couldn&rsquo;t learn something from him.&rdquo; <br /> &mdash;Galileo Galilei',
		'&ldquo;I don&rsquo;t think of all the misery but of the beauty that still remains.&rdquo; <br /> &mdash;Anne Frank',
		'&ldquo;If you aren&rsquo;t fired with enthusiasm, you will be fired with enthusiasm.&rdquo; <br /> &mdash;Vince Lombardi',
		'&ldquo;I have the simplest tastes. I am always satisfied with the best.&rdquo; <br /> &mdash;Oscar Wilde',
		'&ldquo;To see things in the seed, that is genius.&rdquo; <br /> &mdash;Lao Tzu',
		'&ldquo;He who loves 50 people has 50 woes; he who loves no one has no woes.&rdquo; <br /> &mdash;Buddha',
		'&ldquo;Good questions outrank easy answers.&rdquo; <br /> &mdash;Paul Samuelson',
		'&ldquo;Any sufficiently advanced technology is indistinguishable from magic.&rdquo; <br /> &mdash;Arthur C. Clarke'
	]

	let julyArray = [
		'&ldquo;The best way to cheer yourself up is to try to cheer somebody else up.&rdquo; <br /> &mdash;Mark Twain',
		'&ldquo;It has been my experience that folks who have no vices have very few virtues.&rdquo; <br /> &mdash;Abraham Lincoln',
		'&ldquo;Give me liberty or give me death.&rdquo; <br /> &mdash;Patrick Henry',
		'&ldquo;Independence is happiness.&rdquo; <br /> &mdash;Susan B. Anthony',
		'&ldquo;Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.&rdquo; <br /> &mdash;Lao Tzu',
		'&ldquo;Laws are like sausages, it is better not to see them being made.&rdquo; <br /> &mdash;Otto von Bismarck',
		'&ldquo;Travel becomes a strategy for accumulating photographs.&rdquo; <br /> &mdash;Susan Sontag',
		'&ldquo;Sports do not build character. They reveal it.&rdquo; <br /> &mdash;Heywood Broun',
		'&ldquo;People only see what they are prepared to see.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
		'&ldquo;He is happiest, be he king or peasant, who finds peace in his home.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
		'&ldquo;You are remembered for the rules you break.&rdquo; <br /> &mdash;Douglas MacArthur',
		'&ldquo;The traveler sees what he sees, the tourist sees what he has come to see.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
		'&ldquo;We first make our habits, and then our habits make us.&rdquo; <br /> &mdash;John Dryden',
		'&ldquo;History is a vast early warning system.&rdquo; <br /> &mdash;Norman Cousins',
		'&ldquo;I have no money, no resources, no hopes. I am the happiest man alive.&rdquo; <br /> &mdash;Henry Miller',
		'&ldquo;When you arrive at a fork in the road, take it.&rdquo; <br /> &mdash;Yogi Berra',
		'&ldquo;Life consists not in holding good cards but in playing those you hold well.&rdquo; <br /> &mdash;Josh Billings',
		'&ldquo;Nothing great in the world has ever been accomplished without passion.&rdquo; <br /> &mdash;Georg Wilhelm Friedrich Hegel',
		'&ldquo;Better keep yourself clean and bright; you are the window through which you must see the world.&rdquo; <br /> &mdash;George Bernard Shaw',
		'&ldquo;Real knowledge is to know the extent of one&rsquo;s ignorance.&rdquo; <br /> &mdash;Confucius',
		'&ldquo;Less is only more where more is no good.&rdquo; <br /> &mdash;Frank Lloyd Wright',
		'&ldquo;Maybe this world is another planet&rsquo;s hell.&rdquo; <br /> &mdash;Aldous Huxley',
		'&ldquo;Consistency is the last refuge of the unimaginative.&rdquo; <br /> &mdash;Oscar Wilde',
		'&ldquo;We live in a rainbow of chaos.&rdquo; <br /> &mdash;Paul Cezanne',
		'&ldquo;Never go to a doctor whose office plants have died.&rdquo; <br /> &mdash;Erma Bombeck',
		'&ldquo;Diplomacy is the art of saying &lsquo;Nice doggie&rsquo; until you can find a rock.&rdquo; <br /> &mdash;Will Rogers',
		'&ldquo;The unexamined life is not worth living.&rdquo; <br /> &mdash;Socrates',
		'&ldquo;Freedom is never given; it is won.&rdquo; <br /> &mdash;A. Philip Randolph',
		'&ldquo;Only two things are infinite, the universe and human stupidity, and I&rsquo;m not sure about the former.&rdquo; <br /> &mdash;Albert Einstein',
		'&ldquo;All animals are equal, but some animals are more equal than others.&rdquo; <br /> &mdash;George Orwell',
		'&ldquo;Forgiveness is the key to action and freedom.&rdquo; <br /> &mdash;Hannah Arendt'
	]

	let juneArray = [
		'&ldquo;Be not simply good &ndash; be good for something.&rdquo; <br /> &mdash;Henry David Thoreau',
		'&ldquo;Zeal is a volcano, the peak of which the grass of indecisiveness does not grow.&rdquo; <br /> &mdash;Khalil Gibran',
		'&ldquo;A friend is one who knows you and loves you just the same.&rdquo; <br /> &mdash;Elbert Hubbard',
		'&ldquo;The greater our knowledge increases the more our ignorance unfolds.&rdquo; <br /> &mdash;John F. Kennedy',
		'&ldquo;Principles have no real force except when one is well-fed.&rdquo; <br /> &mdash;Mark Twain',
		'&ldquo;It is the soothing thing about history that it does repeat itself.&rdquo; <br /> &mdash;Gertrude Stein',
		'&ldquo;There are no shortcuts in evolution.&rdquo; <br /> &mdash;Louis D. Brandeis',
		'&ldquo;Immorality: the morality of those who are having a better time.&rdquo; <br /> &mdash;H. L. Mencken',
		'&ldquo;If you obey all the rules you miss all the fun.&rdquo; <br /> &mdash;Katharine Hepburn',
		'&ldquo;No amount of experimentation can ever prove me right; a single experiment can prove me wrong.&rdquo; <br /> &mdash;Albert Einstein',
		'&ldquo;You cannot shake hands with a clenched fist.&rdquo; <br /> &mdash;Indira Gandhi',
		'&ldquo;Parents were invented to make children happy by giving them something to ignore.&rdquo; <br /> &mdash;Ogden Nash',
		'&ldquo;I have never in my life learned anything from any man who agreed with me.&rdquo; <br /> &mdash;Dudley Field Malone',
		'&ldquo;Formula for success: rise early, work hard, strike oil.&rdquo; <br /> &mdash;J. Paul Getty',
		'&ldquo;Childhood is a short season.&rdquo; <br /> &mdash;Helen Hayes',
		'&ldquo;I have a Father&rsquo;s Day every day.&rdquo; <br /> &mdash;Dennis Banks',
		'&ldquo;It doesn&rsquo;t matter who my father was; it matters who I remember he was.&rdquo; <br /> &mdash;Anne Sexton',
		'&ldquo;We cannot live only for ourselves. A thousand fibers connect us with our fellow men.&rdquo; <br /> &mdash;Herman Melville',
		'&ldquo;Many a trip continues long after movement in time and space have ceased.&rdquo; <br /> &mdash;John Steinbeck',
		'&ldquo;He who knows that enough is enough will always have enough.&rdquo; <br /> &mdash;Lao Tzu',
		'&ldquo;There are two ways of spreading light: to be the candle or the mirror that reflects it.&rdquo; <br /> &mdash;Edith Wharton',
		'&ldquo;Opportunities are usually disguised as hard work, so most people don&rsquo;t recognize them.&rdquo; <br /> &mdash;Ann Landers',
		'&ldquo;To find out what one is fitted to do, and to secure an opportunity to do it, is the key to happiness.&rdquo; <br /> &mdash;John Dewey',
		'&ldquo;A photograph is a secret about a secret. The more it tells you the less you know.&rdquo; <br /> &mdash;Diane Arbus',
		'&ldquo;Education is the movement from darkness to light.&rdquo; <br /> &mdash;Allan Bloom',
		'&ldquo;Music is the divine way to tell beautiful, poetic things to the heart.&rdquo; <br /> &mdash;Pablo Casals',
		'&ldquo;We aim above the mark to hit the mark.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
		'&ldquo;The home is the chief school of human virtues.&rdquo; <br /> &mdash;William Ellery Channing',
		'&ldquo;Progress was all right. Only it went on too long.&rdquo; <br /> &mdash;James Thurber',
		'&ldquo;The real problem is not whether machines think but whether men do.&rdquo; <br /> &mdash;B. F. Skinner'
	]

	let mayArray = [
		'&ldquo;Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.&rdquo; <br /> &mdash;William Blake',
		'&ldquo;Change your life today. Don&rsquo;t gamble on the future, act now, without delay.&rdquo; <br /> &mdash;Simone de Beauvoir',
		'&ldquo;Reading is to the mind what exercise is to the body.&rdquo; <br /> &mdash;Joseph Addison',
		'&ldquo;Your own mind is a sacred enclosure into which nothing harmful can enter expect by your permission.&rdquo; <br /> &mdash;Arnold Bennett',
		'&ldquo;Love consists in this, that two solitudes protect and touch and greet each other.&rdquo; <br /> &mdash;Rainer Maria Rilke',
		'&ldquo;Imagination is the eye of the soul.&rdquo; <br /> &mdash;Joseph Joubert',
		'&ldquo;What would life be if we had no courage to attempt anything?&rdquo; <br /> &mdash;Vincent Van Gogh',
		'&ldquo;It is amazing what you can accomplish if you do not care who gets the credit.&rdquo; <br /> &mdash;Harry S. Truman',
		'&ldquo;An effort made for the happiness of others lifts above ourselves.&rdquo; <br /> &mdash;Lydia M. Child',
		'&ldquo;Tears of joy are like the summer rain drops pierced by sunbeams.&rdquo; <br /> &mdash;Hosea Ballou',
		'&ldquo;I want to do with you what spring does with cherry trees.&rdquo; <br /> &mdash;Pablo Neruda',
		'&ldquo;Mother is the name for God in the lips and hearts of little children.&rdquo; <br /> &mdash;William Makepeace Thackeray',
		'&ldquo;The sun, the earth, love, friends, our very breath are parts of the banquet.&rdquo; <br /> &mdash;Rebecca Harding Davis',
		'&ldquo;If you do not think about your future, you cannot have one.&rdquo; <br /> &mdash;John Galsworthy',
		'&ldquo;Have patience. All things are difficult before they become easy.&rdquo; <br /> &mdash;Saadi',
		'&ldquo;Silence is the sleep that nourishes wisdom.&rdquo; <br /> &mdash;Francis Bacon',
		'&ldquo;Remember upon the conduct of each depends the fate of all.&rdquo; <br /> &mdash;Alexander the Great',
		'&ldquo;Nothing can be done except little by little.&rdquo; <br /> &mdash;Charles Baudelaire',
		'&ldquo;Courage is fire, and bullying is smoke.&rdquo; <br /> &mdash;Benjamin Disraeli',
		'&ldquo;There is no influence like the influence of habit.&rdquo; <br /> &mdash;Gilbert Parker',
		'&ldquo;Rough diamonds may sometimes be mistaken for worthless pebbles.&rdquo; <br /> &mdash;Thomas Browne',
		'&ldquo;Challenging the meaning of life is the truest expression of the state of being human.&rdquo; <br /> &mdash;Viktor E. Frankl',
		'&ldquo;Judge a man by his questions rather than his answers.&rdquo; <br /> &mdash;Voltaire',
		'&ldquo;Without craftsmanship, inspiration is a mere reed shaken in the wind.&rdquo; <br /> &mdash;Johannes Brahms',
		'&ldquo;The life of the dead is placed in the memory of the living.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
		'&ldquo;Appearances are a glimpse of the unseen.&rdquo; <br /> &mdash;Anaxagoras',
		'&ldquo;Unless we remember we cannot understand.&rdquo; <br /> &mdash;E. M. Forster',
		'&ldquo;My fellow Americans, ask not what your country can do for you, ask what you can do for your country.&rdquo; <br /> &mdash;John F. Kennedy',
		'&ldquo;My motto is: Contented with little, yet wishing for more.&rdquo; <br /> &mdash;Charles Lamb',
		'&ldquo;Give light and people will find the way.&rdquo; <br /> &mdash;Ella Baker',
		'&ldquo;Gratitude is the fairest blossom which springs from the soul.&rdquo; <br /> &mdash;Henry Ward Beecher'
    ]

	let aprilArray = [
		'&ldquo;Wise men speak because they have something to say; Fools because they have to say something.&rdquo; <br /> &mdash;Plato',
		'&ldquo;Success is never final, failure is never fatal. It&rsquo;s courage that counts.&rdquo; <br /> &mdash;John Wooden',
		'&ldquo;The only sure weapon against bad ideas is better ideas.&rdquo; <br /> &mdash;Alfred Whitney Griswold',
		'&ldquo;If you&rsquo;re going through hell, keep going.&rdquo; <br /> &mdash;Winston Churchill',
		'&ldquo;There is always room at the top.&rdquo; <br /> &mdash;Daniel Webster',
		'&ldquo;One way to get the most out of life is to look upon it as an adventure.&rdquo; <br /> &mdash;William Feather',
		'&ldquo;Let us put our minds together and see what life we can make for our children.&rdquo; <br /> &mdash;Sitting Bull',
		'&ldquo;We are going to have peace even if we have to fight for it.&rdquo; <br /> &mdash;Dwight D. Eisenhower',
		'&ldquo;Find something you&rsquo;re passionate about and keep tremendously interested in it.&rdquo; <br /> &mdash;Julia Child',
		'&ldquo;Cherish all your happy moments; they make a fine cushion for old age.&rdquo; <br /> &mdash;Booth Tarkington',
		'&ldquo;All change is not growth, as all movement is not forward.&rdquo; <br /> &mdash;Ellen Glasgow',
		'&ldquo;Perfection is the child of time.&rdquo; <br /> &mdash;Joseph Hall',
		'&ldquo;The glow of one warm thought is to me worth more than money.&rdquo; <br /> &mdash;Thomas Jefferson',
		'&ldquo;Innovation distinguishes between a leader and a follower.&rdquo; <br /> &mdash;Steve Jobs',
		'&ldquo;In this world nothing can be said to be certain, except death and taxes.&rdquo; <br /> &mdash;Benjamin Franklin',
		'&ldquo;A people free to choose will always choose peace.&rdquo; <br /> &mdash;Ronald Reagan',
		'&ldquo;The hardest thing to understand in the world is the income tax.&rdquo; <br /> &mdash;Albert Einstein',
		'&ldquo;Better remain silent, better not even think, if you are not prepared to act.&rdquo; <br /> &mdash;Annie Besant',
		'&ldquo;No matter what people tell you, words and ideas can change the world.&rdquo; <br /> &mdash;Robin Williams',
		'&ldquo;God loves each of us as if there were only one of us.&rdquo; <br /> &mdash;Saint Augustine',
		'&ldquo;A rebirth out of spiritual adversity causes us to become new creatures.&rdquo; <br /> &mdash;James E. Faust',
		'&ldquo;Try to be like the turtle &ndash; at ease in your own shell.&rdquo; <br /> &mdash;Bill Copeland',
		'&ldquo;Either I will find a way, or I will make one.&rdquo; <br /> &mdash;Philip Sidney',
		'&ldquo;What is a soul? It&rsquo;s like electricity &ndash; we don&rsquo;t really know what it is, but it&rsquo;s a force that can light a room.&rdquo; <br /> &mdash;Ray Charles',
		'&ldquo;We must not allow other people&rsquo;s limited perceptions to define us.&rdquo; <br /> &mdash;Virginia Satir',
		'&ldquo;Nobody who ever gave his best regretted it.&rdquo; <br /> &mdash;George Halas',
		'&ldquo;Ten people who speak make more noise than ten thousand who are silent.&rdquo; <br /> &mdash;Napoleon Bonaparte',
		'&ldquo;There is always one moment in childhood when the door opens and lets the future in.&rdquo; <br /> &mdash;Graham Greene',
		'&ldquo;You can&rsquo;t wait for inspiration. You have to go after it with a club.&rdquo; <br /> &mdash;Jack London',
		'&ldquo;People change and forget to tell each other.&rdquo; <br /> &mdash;Lillian Hellman'
    ]

	let marchArray = [
		'&ldquo;When one paints an ideal, one does not need to limit one&rsquo;s imagination.&rdquo; <br /> &mdash;Ellen Key',
		'&ldquo;Let there be work, bread, water and salt for all.&rdquo; <br /> &mdash;Nelson Mandela',
		'&ldquo;The richest love is that which submits to the arbitration of time.&rdquo; <br /> &mdash;Lawrence Durrell',
		'&ldquo;Don&rsquo;t grieve. Anything you lose comes round in another form.&rdquo; <br /> &mdash;Rumi',
		'&ldquo;It is easier to prevent bad habits than to break them.&rdquo; <br /> &mdash;Benjamin Franklin',
		'&ldquo;No one can figure out your worth but you.&rdquo; <br /> &mdash;Pearl Bailey',
		'&ldquo;Life is given to us, we earn it by giving it.&rdquo; <br /> &mdash;Rabindranath Tagore',
		'&ldquo;Tomorrow is only found in the calendar of fools.&rdquo; <br /> &mdash;Og Mandino',
		'&ldquo;Respect is what we owe; love, what we give.&rdquo; <br /> &mdash;Philip James Bailey',
		'&ldquo;Surprise is the greatest gift which life can grant us.&rdquo; <br /> &mdash;Boris Pasternak',
		'&ldquo;One who deceives will always find those who allow themselves to be deceived.&rdquo; <br /> &mdash;Niccolo Machiavelli',
		'&ldquo;Fortune favors the prepared mind.&rdquo; <br /> &mdash;Louis Pasteur',
		'&ldquo;My religion is very simple. My religion is kindness.&rdquo; <br /> &mdash;Dalai Lama',
		'&ldquo;A will finds a way.&rdquo; <br /> &mdash;Orison Swett Marden',
		'&ldquo;Love takes off masks that we fear we cannot live without and know we cannot live within.&rdquo; <br /> &mdash;James Baldwin',
		'&ldquo;Try to keep your soul young and quivering right up to old age.&rdquo; <br /> &mdash;George Sand',
		'&ldquo;Be true to your work, your word, and your friend.&rdquo; <br /> &mdash;John Boyle O&rsquo;Reilly',
		'&ldquo;Who has a harder fight than he who is striving to overcome himself.&rdquo; <br /> &mdash;Thomas &agrave; Kempis',
		'&ldquo;It&rsquo;s hard to be humble, when you&rsquo;re as great as I am.&rdquo; <br /> &mdash;Muhammad Ali',
		'&ldquo;Most people have the will to win, few have the will to prepare to win.&rdquo; <br /> &mdash;Bobby Knight',
		'&ldquo;You exist only in what you do.&rdquo; <br /> &mdash;Federico Fellini',
		'&ldquo;Success is the sum of small efforts &ndash; repeated day in and day out.&rdquo; <br /> &mdash;Robert Collier',
		'&ldquo;Truth is strong, and sometime or other will prevail.&rdquo; <br /> &mdash;Mary Astell',
		'&ldquo;Idealism increases in direct proportion to one&rsquo;s distance from the problem.&rdquo; <br /> &mdash;John Galsworthy',
		'&ldquo;Don&rsquo;t cry because it&rsquo;s over. Smile because it happened.&rdquo; <br /> &mdash;Dr. Seuss',
		'&ldquo;Anyone who has never made a mistake has never tried anything new.&rdquo; <br /> &mdash;Albert Einstein',
		'&ldquo;Avoid popularity; it has many snares, and no real benefit.&rdquo; <br /> &mdash;William Penn',
		'&ldquo;Of all possessions a friend is the most precious.&rdquo; <br /> &mdash;Herodotus',
		'&ldquo;Where there is great love, there are always wishes.&rdquo; <br /> &mdash;Willa Cather',
		'&ldquo;We have all the light we need, we just need to put it in practice.&rdquo; <br /> &mdash;Albert Pike',
		'&ldquo;O, wind, if winter comes, can spring be far behind?&rdquo; <br /> &mdash;Percy Bysshe Shelley'
    ]

	let februaryArray = [
		'&ldquo;Advice is like snow &ndash; the softer it falls, the longer it dwells upon, and the deeper it sinks into the mind.&rdquo; <br /> &mdash;Samuel Taylor Coleridge',
		'&ldquo;Never bend your head. Always hold it high. Look the world straight in the eye.&rdquo; <br /> &mdash;Helen Keller',
		'&ldquo;Wisdom is oftentimes nearer when we stoop than when we soar.&rdquo; <br /> &mdash;William Wordsworth',
		'&ldquo;The roots of all goodness lie in the soil of appreciation for goodness.&rdquo; <br /> &mdash;Dalai Lama',
		'&ldquo;What we really are matters more than what other people think of us.&rdquo; <br /> &mdash;Jawaharlal Nehru',
		'&ldquo;There are years that ask questions and years that answer.&rdquo; <br /> &mdash;Zora Neale Hurston',
		'&ldquo;Expect problems and eat them for breakfast.&rdquo; <br /> &mdash;Alfred A. Montapert',
		'&ldquo;The sole meaning of life is to serve humanity.&rdquo; <br /> &mdash;Leo Tolstoy',
		'&ldquo;Everything that irritates us about others can lead us to an understanding of ourselves.&rdquo; <br /> &mdash;Carl Jung',
		'&ldquo;Life lived for tomorrow will always be just a day away from being realized.&rdquo; <br /> &mdash;Leo Buscaglia',
		'&ldquo;Treasure your relationships, not your possessions.&rdquo; <br /> &mdash;Anthony J. D&rsquo;Angelo',
		'&ldquo;It is the dim haze of mystery that adds enchantment to pursuit.&rdquo; <br /> &mdash;Antoine Rivarol',
		'&ldquo;There is no instinct like that of the heart.&rdquo; <br /> &mdash;Lord Byron',
		'&ldquo;If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.&rdquo; <br /> &mdash;A. A. Milne',
		'&ldquo;Home is any four walls that enclose the right person.&rdquo; <br /> &mdash;Helen Rowland',
		'&ldquo;One word frees us of all the weight and pain in life. That word is love.&rdquo; <br /> &mdash;Sophocles',
		'&ldquo;Do exactly what you would do if you felt most secure.&rdquo; <br /> &mdash;Meister Eckhart',
		'&ldquo;Blessed are the young for they shall inherit the national debt.&rdquo; <br /> &mdash;Herbert Hoover',
		'&ldquo;There is a thin line that separates laughter and pain, comedy and tragedy, humor and hurt.&rdquo; <br /> &mdash;Erma Bombeck',
		'&ldquo;The wish for healing has always been half of health.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
		'&ldquo;To the mind that is still, the whole universe surrenders.&rdquo; <br /> &mdash;Lao Tzu',
		'&ldquo;The time you enjoy wasting is not wasted time.&rdquo; <br /> &mdash;Bertrand Russell',
		'&ldquo;If you can&rsquo;t describe what you are doing as a process, you don&rsquo;t know what you&rsquo;re doing.&rdquo; <br /> &mdash;W. Edwards Deming',
		'&ldquo;The eternal quest of the individual human being is to shatter his loneliness.&rdquo; <br /> &mdash;Norman Cousins',
		'&ldquo;I believe in being an innovator.&rdquo; <br /> &mdash;Walt Disney',
		'&ldquo;Great dancers are not great because of their technique, they are great because of their passion.&rdquo; <br /> &mdash;Martha Graham',
		'&ldquo;I believe that every human mind feels pleasure in doing good to another.&rdquo; <br /> &mdash;Thomas Jefferson',
		'&ldquo;Perfection is attained by slow degrees; it requires the hand of time.&rdquo; <br /> &mdash;Voltaire',
		'&ldquo;You can never plan the future by the past.&rdquo; <br /> &mdash;Edmund Burke'
    ]

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
		'&ldquo;A thousand words will not leave so deep an impression as one deed.&rdquo; <br /> &mdash;Henrik Ibsen',
		'&ldquo;Life&rsquo;s most persistent and urgent question is, &lsquo;What are you doing for others?&rsquo;&rdquo; <br /> &mdash;Martin Luther King, Jr.',
		'&ldquo;It&rsquo;s not what happens to you, but how you react to it that matters.&rdquo; <br /> &mdash;Epictetus',
		'&ldquo;This is what I learned: that everybody is talented, original and has something important to say.&rdquo; <br /> &mdash;Brenda Ueland',
		'&ldquo;A man who has not passed through the inferno of his passions has never overcome them.&rdquo; <br /> &mdash;Carl Jung',
		'&ldquo;If the only prayer you ever say in your entire life is thank you, it will be enough.&rdquo; <br /> &mdash;Meister Eckhart',
		'&ldquo;The secret of my influence has always been that it remained secret.&rdquo; <br /> &mdash;Salvador Dali',
		'&ldquo;A work of art is above all an adventure of the mind.&rdquo; <br /> &mdash;Eugene Ionesco',
		'&ldquo;Before anything else, preparation is the key to success.&rdquo; <br /> &mdash;Alexander Graham Bell',
		'&ldquo;Every man dies. Not every man really lives.&rdquo; <br /> &mdash;William Wallace',
		'&ldquo;People don&rsquo;t notice whether it&rsquo;s winter or summer when they&rsquo;re happy.&rdquo; <br /> &mdash;Anton Chekhov',
		'&ldquo;Neither blame or praise yourself.&rdquo; <br /> &mdash;Plutarch'
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
