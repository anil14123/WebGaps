<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WAG_Login.Default" %>

<!DOCTYPE HTML>
<!--
	Horizons by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Horizons by TEMPLATED</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="css/ie/html5shiv.js"></script><![endif]-->
		<script src="/sitetheme/templated-horizons/js/jquery.min.js"></script>
		<script src="/sitetheme/templated-horizons/js/jquery.dropotron.min.js"></script>
		<script src="/sitetheme/templated-horizons/js/skel.min.js"></script>
		<script src="/sitetheme/templated-horizons/js/skel-layers.min.js"></script>
		<script src="/sitetheme/templated-horizons/js/init.js"></script>

         <script type="text/javascript" src="sliders/carousel-slider.slider/js/jssor.slider.mini.js"></script>

		<noscript>
			<link rel="stylesheet" href="/sitetheme/templated-horizons/css/skel.css" />
			<link rel="stylesheet" href="/sitetheme/templated-horizons/css/style.css" />
		</noscript>


         <script>

        jQuery(document).ready(function ($) {
            
            var jssor_1_options = {
              $AutoPlay: true,
              $AutoPlaySteps: 4,
              $SlideDuration: 160,
              $SlideWidth: 200,
              $SlideSpacing: 3,
              $Cols: 4,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 4
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingX: 1,
                $SpacingY: 1
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 809);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
    </script>



		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
	</head>
	<body class="homepage">

		<!-- Header -->
			<div id="header">
				<div class="container">
						
					<!-- Logo -->
						<h1><a href="#" id="logo">W G A</a></h1>
					
                    <style>
                        #nav ul li a {
                            border:2px solid white;
                            border-radius:5px;
                            padding:10px;
                        }

                        .signin{
                            background-color:darkorange;
                        }

                        .price{
                            background-color:lightseagreen;
                            color:white;

                            padding:10px 15px;
                          
                            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        }

                        .priceoffer{
                            border:2px solid lightseagreen;
                        }

                        .offer{
                            color:lightseagreen;
                            font-weight:bold;
                            padding:10px;
                        }

                        .plus{
                            color:blueviolet;
                        }

                        .steps{
                            background-color:darkcyan;
                            color:white;
                            display:inline-block;
                            padding:25px;
                            border-radius:10px;
                        }

                        .number{
                            display:inline-block;
                            color:white;
                            font-weight:bold;
                            background-color:blueviolet;
                            border-radius:50%;
                            padding:35px 44px;
                            opacity:0.5;
                        }

                    </style>

					<!-- Nav -->
						<nav id="nav">
							<ul>
								<li><a href="index.html">My Sites</a></li>
								<%--<li>
									<a href="">Dropdown</a>
									<ul>
										<li><a href="#">Lorem ipsum dolor</a></li>
										<li><a href="#">Magna phasellus</a></li>
										<li><a href="#">Etiam dolore nisl</a></li>
										<li>
											<a href="">Phasellus consequat</a>
											<ul>
												<li><a href="#">Lorem ipsum dolor</a></li>
												<li><a href="#">Phasellus consequat</a></li>
												<li><a href="#">Magna phasellus</a></li>
												<li><a href="#">Etiam dolore nisl</a></li>
												<li><a href="#">Veroeros feugiat</a></li>
											</ul>
										</li>
										<li><a href="#">Veroeros feugiat</a></li>
									</ul>
								</li>--%>
								<li><a href="left-sidebar.html">Templates</a></li>
                                <li><a class="signin" href="left-sidebar.html">Sign In</a></li>
							</ul>
						</nav>

                      <div>100's of Templates access</div>

					<!-- Banner -->
						<div id="banner">
							<div class="container">
								<section>
									<header class="major">
										<h2>Welcome to WebGaps</h2>
										<span class="byline">Build your own website in minutes.</span>
									</header>
									<a href="#" class="button alt">Sign Up</a>
								</section>			
							</div>
						</div>

				</div>
			</div>

		<!-- Featured -->
			<div class="wrapper style2">
				<section class="container">
					<header class="major priceoffer">
						<h2>Just pay <span class="price">5$</span> Per month</h2>
						<span class="byline offer">Free Domain <span class="plus">+</span> Premium Templates and Builder <span class="plus">+</span> Unlimited Web Pages <span class="plus">+</span> 100 MB for Images </span>
					</header>

                    <br />
                    <br />

                   	<div class="row no-collapse-1">
						<section class="3u">
							<span class="number">1</span>
							
						</section>
						<section class="3u">
								<span class="number">2</span>
							
						</section>
						<section class="3u">
								<span class="number">3</span>
							
						</section>
                        <section class="3u">
								<span class="number">4</span>
							
						</section>
	
					</div>
                    <br />
                    <br />

					<div class="row no-collapse-1">
						<section class="3u">
							<span class="steps">Choose a Design</span>
							<p><br />Choose from 100's of templates.</p>
						</section>
						<section class="3u">
							<span class="steps">Edit Your Website</span>
							<p><br />Edit using our professional website builder called QBuilder.</p>
						</section>
						<section class="3u">
							<span class="steps">Publish to web.</span>
							<p><br />Plublish your work to go online.</p>
						</section>
                        <section class="3u">
							<span class="steps">You are now online</span>
							<p><br />Check your website online by entering your web address in browser.</p>
						</section>
	
					</div>
				</section>
			</div>

		<!-- Main -->
			<div id="main" class="wrapper style1">
				<section class="container">
					<header class="major">
						<h2>Choose from over 100's of templates.</h2>
						<span class="byline">Refer your friends.</span>
					</header>
					

                    <div>


        <style>
        
        /* jssor slider bullet navigator skin 03 css */
        /*
        .jssorb03 div           (normal)
        .jssorb03 div:hover     (normal mouseover)
        .jssorb03 .av           (active)
        .jssorb03 .av:hover     (active mouseover)
        .jssorb03 .dn           (mousedown)
        */
        .jssorb03 {
            position: absolute;
        }
        .jssorb03 div, .jssorb03 div:hover, .jssorb03 .av {
            position: absolute;
            /* size of bullet elment */
            width: 21px;
            height: 21px;
            text-align: center;
            line-height: 21px;
            color: white;
            font-size: 12px;
            background: url('/sliders/carousel-slider.slider/img/b03.png') no-repeat;
            overflow: hidden;
            cursor: pointer;
        }
        .jssorb03 div { background-position: -5px -4px; }
        .jssorb03 div:hover, .jssorb03 .av:hover { background-position: -35px -4px; }
        .jssorb03 .av { background-position: -65px -4px; }
        .jssorb03 .dn, .jssorb03 .dn:hover { background-position: -95px -4px; }

        /* jssor slider arrow navigator skin 03 css */
        /*
        .jssora03l                  (normal)
        .jssora03r                  (normal)
        .jssora03l:hover            (normal mouseover)
        .jssora03r:hover            (normal mouseover)
        .jssora03l.jssora03ldn      (mousedown)
        .jssora03r.jssora03rdn      (mousedown)
        */
        .jssora03l, .jssora03r {
            display: block;
            position: absolute;
            /* size of arrow element */
            width: 55px;
            height: 55px;
            cursor: pointer;
            background: url('/sliders/carousel-slider.slider/img/a03.png') no-repeat;
            overflow: hidden;
        }
        .jssora03l { background-position: -3px -33px; }
        .jssora03r { background-position: -63px -33px; }
        .jssora03l:hover { background-position: -123px -33px; }
        .jssora03r:hover { background-position: -183px -33px; }
        .jssora03l.jssora03ldn { background-position: -243px -33px; }
        .jssora03r.jssora03rdn { background-position: -303px -33px; }
    </style>



                        <div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 809px; height: 150px; overflow: hidden; visibility: hidden;">
        <!-- Loading Screen -->
        <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
            <div style="position:absolute;display:block;background:url('/sliders/carousel-slider.slider/img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
        </div>
        <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 809px; height: 150px; overflow: hidden;">
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/005.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/006.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/011.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/013.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/014.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/019.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/020.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/021.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/022.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/024.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/025.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/027.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/029.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/030.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/031.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/030.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/034.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/038.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/039.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/043.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/044.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/047.jpg" />
            </div>
            <div style="display: none;">
                <img data-u="image" src="/sliders/carousel-slider.slider/img/050.jpg" />
            </div>
        </div>
        <!-- Bullet Navigator -->
        <div data-u="navigator" class="jssorb03" style="bottom:10px;right:10px;">
            <!-- bullet navigator item prototype -->
            <div data-u="prototype" style="width:21px;height:21px;">
                <div data-u="numbertemplate"></div>
            </div>
        </div>
        <!-- Arrow Navigator -->
        <span data-u="arrowleft" class="jssora03l" style="top:0px;left:8px;width:55px;height:55px;" data-autocenter="2"></span>
        <span data-u="arrowright" class="jssora03r" style="top:0px;right:8px;width:55px;height:55px;" data-autocenter="2"></span>
      <%--  <a href="http://www.jssor.com" style="display:none">Slideshow Maker</a>--%>
    </div>



                    </div>

				</section>
			</div>

		<!-- Footer -->
			<div id="footer">
				<div class="container">

					<!-- Lists -->
						<div class="row">
							<div class="8u">
								<section>
									<header class="major">
										<h2>Donec dictum metus</h2>
										<span class="byline">Quisque semper augue mattis wisi maecenas ligula</span>
									</header>
									<div class="row">
										<section class="6u">
											<ul class="default">
												<li><a href="#">Pellentesque elit non gravida blandit.</a></li>
												<li><a href="#">Lorem ipsum dolor consectetuer elit.</a></li>
												<li><a href="#">Phasellus nibh pellentesque congue.</a></li>
												<li><a href="#">Cras vitae metus aliquam  pharetra.</a></li>
											</ul>
										</section>
										<section class="6u">
											<ul class="default">
												<li><a href="#">Pellentesque elit non gravida blandit.</a></li>
												<li><a href="#">Lorem ipsum dolor consectetuer elit.</a></li>
												<li><a href="#">Phasellus nibh pellentesque congue.</a></li>
												<li><a href="#">Cras vitae metus aliquam  pharetra.</a></li>
											</ul>
										</section>
									</div>
								</section>
							</div>
							<div class="4u">
								<section>
									<header class="major">
										<h2>WebGaps</h2>
										<span class="byline">We create technology</span>
									</header>
									<ul class="contact">
										<li>
											<span class="address">Address</span>
											<span>Us, India</span>
										</li>
										<li>
											<span class="mail">Mail</span>
											<span><a href="#">webgaps@gmail.com</a></span>
										</li>
										<li>
											<span class="phone">Phone</span>
											<span>+91 7095014888</span>
										</li>
									</ul>	
								</section>
							</div>
						</div>


				</div>
			</div>

	</body>
</html>