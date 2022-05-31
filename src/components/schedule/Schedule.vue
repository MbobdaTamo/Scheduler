<template>
    <div class="schedule">
        <h2>INFO L3 - Planning 2019/2020</h2>
        <div class="scheduleMain">
            <div class="days">
                <div id="voidDay"><span></span></div>
                <div><span>Lundi</span></div>
                <div><span>Mardi</span></div>
                <div><span>Mercredi</span></div>
                <div><span>Jeudi</span></div>
                <div><span>Vendredi</span></div>
                <div><span>Samedi</span></div>
            </div>
            <div class="hours">
                <div>7h</div>
                <div>9h</div>
                <div>10h</div>
                <div>11h</div>
                <div>12h</div>
                <div>13h</div>
                <div>14h</div>
                <div>15h</div>
                <div>16h</div>
            </div>
            <BlueTextBox message = "INFO 3045"
                positionX = 0
                positionY = 4
                height = 1
            />
            <BlueTextBox message = "INFO 3045"
                positionX = 1
                positionY = 2
                height = 2
            />
            <BlueTextBox message = "INFO 3045"
                positionX = 4
                positionY = 3
                height = 1
            />
            <BlueTextBox message = "INFO 3045"
                positionX = 0
                positionY = 1
                height = 2
            />
            <BlueTextBox message = "INFO 3045"
                positionX = 0
                positionY = 0
                height = 1
            />
        </div>
    </div>
</template>
<style src="./schedule.css">
</style>
<script src = "./schedule.js">
</script>
