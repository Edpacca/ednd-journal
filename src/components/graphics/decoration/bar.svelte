<script lang="ts">
    export let position: "top" | "right" | "left" | "bottom";
    export let colour: string = "black";
</script>

<div class="{position}-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.209 126.209" style="stroke:{colour}" class="bar {position}">
        <g>
            <path transform="translate(-134.26)" style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M137.742 5.84h102.631" />
        </g>
    </svg>
</div>


<style>
    .top-container {
        display: flex;
        width: 100%;
        justify-content: center;
        position: absolute;
    }

    .bottom-container {
        display: flex;
        width: 100%;
        justify-content: center;
        position: absolute;
    }

    .right-container {
        display: flex;
        align-items: center;
    }

    .left-container {
        display: flex;
        align-items: center;
    }

    .bar {
        height: max(20vh, 20vw);
        position: absolute;
    }

    .top {
        top: var(--corner-padding);
    }

    .right {
        right: var(--corner-padding);
        transform: rotate(90deg);
    }

    .left {
        left: var(--corner-padding);
        transform: rotate(270deg);
    }
    .bottom {
        bottom: var(--corner-padding);
    }
</style>

