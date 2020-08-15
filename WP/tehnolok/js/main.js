"use strict";let $=jQuery.noConflict();$(document).ready(function(){$(".burger__button").on("click",function(){$(".burger__menu").fadeToggle().toggleClass("active")}),$(".burger__menu").on("mouseup",function(e){const t=$(".burger__nav");t.is(e.target)||0!==t.has(e.target).length||$(this).fadeToggle().toggleClass("active")}),$(window).scroll(function(){$(window).scrollTop()>=50?$(".header").addClass("scroll"):$(".header").removeClass("scroll")});new Swiper(".features__slider",{loop:!1,centerInsufficientSlides:!0,watchOverflow:!0,navigation:{nextEl:".features__next",prevEl:".features__prev"},breakpoints:{575:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5}}}),new Swiper(".our-projects__slider",{loop:!1,slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".our-projects__next",prevEl:".our-projects__prev"}});$(".our-projects__img-slider").each(function(){new Swiper(this,{loop:!1,slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:this.querySelector(".arrow_next"),prevEl:this.querySelector(".arrow_prev")}})}),$(".our-projects__img").each(function(){let e=new Swiper(this.querySelector(".our-projects__img-nav"),{loop:!1,slidesPerView:4,watchSlidesProgress:!0,spaceBetween:5,centerInsufficientSlides:!0});new Swiper(this.querySelector(".our-projects__img-slider-w-nav"),{loop:!1,slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:this.querySelector(".arrow_next"),prevEl:this.querySelector(".arrow_prev")},thumbs:{swiper:e}})});new Swiper(".news__slider",{loop:!1,spaceBetween:30,centerInsufficientSlides:!0,watchOverflow:!0,navigation:{nextEl:".news__next",prevEl:".news__prev"},breakpoints:{575:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".reviews__slider",{loop:!1,spaceBetween:0,centerInsufficientSlides:!0,watchOverflow:!0,navigation:{nextEl:".reviews__next",prevEl:".reviews__prev"},breakpoints:{575:{slidesPerView:2},769:{slidesPerView:"auto",spaceBetween:34},992:{slidesPerView:"auto",spaceBetween:34},1200:{slidesPerView:"auto",spaceBetween:19}}}),new Swiper(".gallery",{loop:!0,slidesPerView:"auto",centerInsufficientSlides:!0,watchOverflow:!0,autoplay:!0,centeredSlides:!0,freeMode:!0}),new Swiper(".posts__slider",{loop:!1,centerInsufficientSlides:!0,watchOverflow:!0,navigation:{nextEl:".posts__next",prevEl:".posts__prev"},breakpoints:{575:{slidesPerView:2,spaceBetween:10},992:{slidesPerView:3,spaceBetween:90},1200:{spaceBetween:80}}});$('input[type="tel"]').on("focus",function(){$(this).mask("+7(000)000-00-00"),0===$(this).val().length&&$(this).val("+7(")});new Swiper(".numbers__slider",{loop:!1,centerInsufficientSlides:!0,watchOverflow:!0,navigation:{nextEl:".numbers__next",prevEl:".numbers__prev"},breakpoints:{575:{slidesPerView:2},768:{slidesPerView:5},992:{slidesPerView:6,spaceBetween:30}}});$(".select").on("click",function(){$(this).toggleClass("active")}).on("blur",function(){$(this).removeClass("active")});const e=$(".projects-menu__slider").data("init"),t=new Swiper(".projects-menu__slider",{direction:"horizontal",loop:!1,slidesPerView:3,navigation:{nextEl:".projects-menu__next",prevEl:".projects-menu__prev"},breakpoints:{768:{slidesPerView:4},992:{slidesPerView:6}}});function i(e){const t=e.querySelector(".video__link"),i=e.querySelector(".video__button"),s=function(e){return e.href.match(/[a-zA-Z0-9_-]+$/)[0]}(t);e.addEventListener("click",()=>{const n=function(e){const t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),t.setAttribute("src",function(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}(e)),t.classList.add("video__media"),t}(s);t.remove(),i.remove(),e.appendChild(n)}),t.removeAttribute("href"),e.classList.add("video_enabled")}t.initialized&&(t.slideTo(e),t.slides[e].classList.add("active")),function(){const e=document.querySelectorAll(".video");for(let t=0;t<e.length;t++)i(e[t])}();new Swiper(".interview__slider",{loop:!1,slidesPerView:1,navigation:{nextEl:".interview__next",prevEl:".interview__prev"}});$(window).on("load resize",function(){$(window).width()>992?$(".faq__answer").mCustomScrollbar():$(".faq__answer").mCustomScrollbar("destroy")}),$(".faq__question").on("click",function(){const e=$(this).siblings(".faq__answer");$(this).addClass("active"),$(".faq__question").not(this).removeClass("active"),$(window).width()>992?($(".faq__answer").not(e).fadeOut(),e.fadeIn()):($(".faq__answer").not(e).slideUp(),e.slideDown())});let s={init:function(){this.bindUIfunctions(),this.pageLoadCorrectTab()},bindUIfunctions:function(){$(document).on("click",".team__tab:not('.active')",function(e){s.changeTab(this.hash),e.preventDefault()}).on("click",".team__tab.active",function(e){s.toggleMobileMenu(e,this),e.preventDefault()})},changeTab:function(e){let t=$("[href='"+e+"']"),i=$(e);t.addClass("active").siblings().removeClass("active"),i.addClass("active").siblings(".team__container").removeClass("active"),n(),window.history.replaceState("","",e),t.closest(".team__tabs").removeClass("open")},pageLoadCorrectTab:function(){this.changeTab(document.location.hash)},toggleMobileMenu:function(e,t){$(t).closest(".team__tabs").toggleClass("open")}};function n(){$(".team__slider").each(function(){new Swiper(this,{loop:!1,centerInsufficientSlides:!0,watchOverflow:!0,navigation:{nextEl:this.parentElement.querySelector(".arrow_next"),prevEl:this.parentElement.querySelector(".arrow_prev")},breakpoints:{575:{slidesPerView:2},768:{slidesPerView:3},1200:{slidesPerView:4}}})})}s.init(),n();new Swiper(".office__slider",{loop:!1,slidesPerView:1,centerInsufficientSlides:!0,watchOverflow:!0,freeMode:!0,autoplay:{delay:4e3},speed:1e3});svg4everybody()});