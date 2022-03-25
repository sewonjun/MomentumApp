const quotes = [
    {
    quote: '언제나 현재에 집중할 수 있다면 행복할 것이다',
    author: '사무엘존슨'
    },
    {
    quote: '한번의 실패와 영원한 실패를 혼동하지 말라',
    author: 'F.스콧 핏제랄드'
    },
    {
    quote: '절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.',
    author: ' -L론허바드'
    },
    {
    quote: '내가 별거 아니라고 생각하면 아무것도 아니야.',
    author: '나의 아저씨 중'
    },
    {
    quote: '세상에 모든 일을 내가 어찌할 수 있다고 생각하지 말기',
    author: '누군가로 부터'
    },
    {
    quote: '마음만을 가지고 있어서는 안된다. 반드시 실현할 때가 온다',
    author: '괴테'
    },
    {
    quote: '삶에 필요 없었던 순간은 절대 없다',
    author: '누군가로부터'
    },
    {
    quote: '내가 싫다고 해서 상대방 마음에 대해 책임이 없는 건 아니에요. 어쨌든 그 마음이 움직인 이유는 당신이니까',
    author: '멜로가 체질 중'
    },
    {
    quote: 'Weve all got both light and darkness inside us. What matters is the part we choose to cat on. Thats who we really are',
    author: 'Sirius Black'
    },
    {
    quote: '당신이 진심을 다해 하고 싶은게 있다면 길을 찾을 것이고, 그렇지 않다면 변명을 찾을 것이다.',
    author: 'Jim Rohn'
    },
    ];
    
    const quote = document.querySelector("#quotes span:first-child");
    
    const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;

author.innerText = todaysQuote.author;