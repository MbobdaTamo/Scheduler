<style src="./main.css">
</style>
<script src = "./main.js">
</script>
<template>
	<nav class="shadow navbar navbar-expand-lg bg-light fixed-top">
		<div class="container-fluid">
			<a class="navbar-brand font-monospace fw-bold" href="#">Scheduler</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
				<div><a href="salle" class="btn btn-primary font-monospace fw-bold" tabindex="-1" role="button" aria-disabled="true">Guide</a></div>
			</div>
		</div>
	</nav>
	<div class="text-center p-5 m-5">
		<blockquote class="blockquote">
			<h1 class="display-4 pt-5 text-black-50 font-monospace fw-bold" id="typing">
				<div class="font-monospace">Scheduler is awesome!!</div>
			</h1>
		</blockquote>
		<figcaption class="fw-light blockquote-footer font-monospace">Instantly schedule school activities</figcaption>
	</div>
    <div class="main container">
		<div class="row ms-5 me-5 ps-5 pe-5 text-center">	
			<div class="col order-first mt-2"><a href="salle" class="rounded font-monospace fw-bold shadow btn btn-primary btn-lg hidden-sm hidden-xs btn-block" tabindex="-1" role="button" aria-disabled="true">Salle</a></div>
			<div class="col mt-2"><a href="classe" class="rounded font-monospace fw-bold shadow btn btn-primary btn-lg hidden-sm hidden-xs btn-block" tabindex="-1" role="button" aria-disabled="true">Classe</a></div>
			<div class="col mt-2"><a href="enseignant" class="rounded font-monospace fw-bold shadow btn btn-primary btn-lg hidden-sm hidden-xs btn-block" tabindex="-1" role="button" aria-disabled="true">Enseignant</a></div>
			<div class="col order-last mt-2"><a href="sceance" class="rounded font-monospace fw-bold shadow btn btn-primary btn-lg hidden-sm hidden-xs btn-block" tabindex="-1" role="button" aria-disabled="true">Scéance</a></div>
		</div>
	</div>
	<div class="text-center p-5 m-5"><a class="p-3 text-center shadow font-monospace fw-bold btn btn-primary btn-lg hidden-sm hidden-xs" href="schedule">Planning</a></div>
	<div class="text-center pt-5 mt-5 font-monospace fw-bold text-black-50" href="#"></div>

	<footer class="shadow bg-light text-center text-lg-start font-monospace fw-bold fixed-bottom">
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">© 2022 Copyright: <a class="text-dark" href="#">TheSavoir</a></div>
	</footer>
</template>
