/**
 *  Footnote Hover Expand
 *  @author Una Ada <una@anarchy.website>
 *
 *  Most of this is taken from
 *      https://github.com/pheneco/menu/blob/master/menu.js
 *      https://github.com/pheneco/Graphene/blob/master/client/scripts/app.js
 */

Element.prototype.remove = function () {
	this.parentElement.removeChild(this);
}
Element.prototype.parentAnchor = function () {
	var t = this;
	if (t == null)
		return false;
	while (t.tagName.toLowerCase() !== 'html') {
		if (typeof t.href == 'string')
			return t;
		t = t.parentElement;
	}
	return false;
}
Element.prototype.isOff = function (x, y) {
	var r = this.getBoundingClientRect(),
		a;
	y -= (a = document.documentElement.scrollTop) ? a : scrollY;
	x -= (a = document.documentElement.scrollLeft) ? a : scrollX;
	return (x < r.left || x > r.right || y < r.top || y > r.bottom);
}

_fnh = (FootNoteHover = {
    card : '',
    cards : [],
    cardSrc : {},
    hovering : 0,
    hoverTime : 0,
    isOpen : false,
    mousemove : function(e){
        //  clear the hover timeout
        if(_fnh.hoverTime) window.clearTimeout(_fnh.hoverTime);
        // if a card is already open
        if(_fnh.hovering){
            // get the card element and the element that created it
            var a = _fnh.cards[_fnh.card].getBoundingClientRect(),
                b = _fnh.cardSrc.getBoundingClientRect();
            // determine if the mouse moved to a position outside of the elements
            if( e.clientY < b.top
            || (e.clientY < a.top && (e.clientX < b.left || e.clientX > b.right))
            ||  e.clientY > a.bottom
            ||  e.clientX < a.left
            ||  e.clientX > a.right)
                _fnh.close();
        } else {
            var a,b;
            // terrible code that determines if the target is a link by operating on it
            if(a = e.target.parentAnchor()){
                // this is the thing that determines if its a footnote or not
                if(a.href.split('#')[0] !== window.location.href.split('#')[0]) return;
                var c = a.hash.split(':');
                if(c[0].toLowerCase() == '#fn' && typeof c[1] == 'string')
                    _fnh.hoverTime = window.setTimeout(function(){
                        _fnh.card = c[1].toLowerCase();
                        _fnh.hovering = !0;
                        _fnh.open(e);
                    },750);
            }
        }
    },
    onOpen : function(){},
	onClose : function(){},
	open : function (e, o) {
		var cards, card;
        _fnh.cardSrc = e.target;
        // if card container doesnt exist, create it
        if(!(cards = document.getElementById('hovercards')))
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforebegin', '<div id="hovercards"></div>'),
            cards = document.getElementById('hovercards');
        // if card for this footnore doesnt exist, create it
        if(!(card = _fnh.cards[_fnh.card])){
            card = document.createElement('div');
            card.id = 'hovercard-' + _fnh.card;
            card.className = 'hovercard';
            card.innerHTML = '';
            _fnh.cards[_fnh.card] = card;
            cards.insertBefore(card, cards.children[0]);
        }
        var cont = document.getElementById('fn:'+_fnh.card).innerHTML;
        card.innerHTML = cont;
        card.style.opacity = 0;
        card.style.display = 'block';
		_fnh.isOpen = true;
        var a = _fnh.cardSrc.getBoundingClientRect(),
            b = document.getElementsByTagName('body')[0].getBoundingClientRect(),
            c = card.getBoundingClientRect();
        card.style.top = a.bottom + 'px';
        card.style.left = (a.left + (a.width/2)) - (c.width/2) + 'px';
        card.style.opacity = 1;
		_fnh.onOpen();
		return false;
	},
	close : function(){
		if(_fnh.isOpen){
			_fnh.isOpen = false;
            window.setTimeout(function(){_fnh.cards[_fnh.card].style.display = 'none';},500);
            _fnh.cards[_fnh.card].style.opacity = 0;
            _fnh.hovering = !1;
			_fnh.onClose();
		}
	},
});

window.addEventListener('mousemove',_fnh.mousemove);
window.addEventListener('scroll',()=>{_fnh.close()});
