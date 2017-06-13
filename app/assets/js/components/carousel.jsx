var	React = require('react');

var Carousel = React.createClass({
	/**
	 * [getInitialState While first time come to the page this will set up the object state like first image in slider]
	 * @return {[type]} [description]
	 */
	getInitialState: function(){
		return {
			items: this.props.data.items,
			count: 0
		}
	},
	/**
	 * [nextImage This method is used to go to the next image in the slider]
	 * @param  {[type]} e [Event]
	 * @return {[type]}   [description]
	 */
	nextImage: function(e){
		var count = this.state.count;

		//check for last image if it's last image in slider it won't allow to go fruther as it's reached to the end.  
		if(count === this.state.items.length -1)
			return;

		count++;

		this.setState({
			count: count
		});

		e.preventDefault();
	},
	/**
	 * [prevImage This method is used to go to the previous image in the slider]
	 * @param  {[type]} e [Event]
	 * @return {[type]}   [description]
	 */
	prevImage: function(e){
		var count = this.state.count;

		//check for first image if it's first image in slider it won't allow to go fruther as it's reached to the start.
		if(count === 0)
			return;

		count--;

		this.setState({
			count: count
		});

		e.preventDefault();
	},

	/**
	 * [render This method is going to return the slider structure or you can say the object which we are going to render in DOM]
	 * 
	 * There is carousal-list slider container in which we are populating the image in form of list
	 *		
	 * There is footer which is caption part of the slider in which we can see the current caption which we are getting from the item object
	 *		
	 * There is dots-conatainer container is the bottom the current selected image dot 
	 * as we can see we have map of the item in which we can find out the current item with that we are adding a class which shows the selection in dots 
	 *
	 *  @return {[type]} [description]
	*/		
	render: function() {
		var self = this;
		var current = this.state.items[this.state.count];
		return (
			<div className="carousel">

				<span className="next" onClick={this.nextImage}>next</span>

					<ul className="carousal-list">
					{
						self.state.items.map(function(item, index){
							var style ={
								left:((index - self.state.count)*100)+'%'
							};
							return <li style={style}><img src={item.img}></img></li>;
						})
					}
					</ul>

				<div className="footer">{current.caption}</div>

				<span className="prev" onClick={this.prevImage}>prev</span>
				
				<div className="dots-conatainer">
				{
					self.state.items.map(function(item, index){
						var selectedClass = index == self.state.count ? 'selected' : '';

						return <span className={'dots ' + selectedClass}></span>;
					})
				}
				</div>

			</div>
		)
	}

});

module.exports = Carousel;