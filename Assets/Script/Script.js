// JavaScript source code

/*alert('welcome to javascript world');*/

const MoreBtn = document.getElementById('aboutUsLocal001');


MoreBtn.onclick = function () {
    myBtn()
};

function myBtn() {
    const moreBtn = document.getElementById('MoreList');

    if (moreBtn.style.display == 'block') {
        moreBtn.style.display = 'none';
    } else {
        moreBtn.style.display = 'block';
    }
}


// product feature start

// product feature start end

