
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var
FilterGallery = function () {

	function FilterGallery() {_classCallCheck(this, FilterGallery);
		this.$filtermenuList = $('.filtermenu li');
		this.$container = $('.container_filter');

		this.updateMenu('all');
		this.$filtermenuList.on('click', $.proxy(this.onClickFilterMenu, this));
	}_createClass(FilterGallery, [{ key: 'onClickFilterMenu', value: function onClickFilterMenu(

		event) {
			var $target = $(event.target);
			var targetFilter = $target.data('filter');

			this.updateMenu(targetFilter);
			this.updateGallery(targetFilter);
		} }, { key: 'updateMenu', value: function updateMenu(

		targetFilter) {
			this.$filtermenuList.removeClass('active');
			this.$filtermenuList.each(function (index, element) {
				var targetData = $(element).data('filter');

				if (targetData === targetFilter) {
					$(element).addClass('active');
				}
			});
		} }, { key: 'updateGallery', value: function updateGallery(

		targetFilter) {var _this = this;

			if (targetFilter === 'all') {
				this.$container.fadeOut(300, function () {
					$('.post').show();
					_this.$container.fadeIn();
				});
			} else {
				this.$container.find('.post').each(function (index, element) {
					_this.$container.fadeOut(300, function () {
						if ($(element).hasClass(targetFilter)) {
							$(element).show();
						} else {
							$(element).hide();
						}
						_this.$container.fadeIn();
					});
				});
			}
		} }]);return FilterGallery;}();


var fliterGallery = new FilterGallery();



//scroll
$(window).resize(function () {

	var viewportWidth = $(window).width();
	if (viewportWidth < 767) {
		$(".sliding-link").click(function (e) {
			e.preventDefault();
			var aid = $(this).attr("href");
			$('html,body').animate({
				scrollTop: 340
			}, 'slow');
		});
	}
	})
	.resize();

	//scroll