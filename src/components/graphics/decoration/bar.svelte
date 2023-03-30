<script lang="ts">
    export let position: "top" | "right" | "left" | "bottom";
    export let colour: string = "black";
    
    function getScale() {
        switch(position) {
            case "top":
                return "scale(3 1)";
            case "bottom":
                return "scale(4 1)";
            case "right":
                return "scale(1 3)";
            case "left":
                return "scale(1 3)";
        }
    }
</script>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.209 126.209" style="stroke:{colour}" class="bar {position}" transform="scale(3, 1)">
        <g>
            <path style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M0 5.84h126.209" />
        </g>
    </svg>


<style>
    .top-container {
        display: flex;
        width: 100%;
        justify-content: center;
        position: absolute;
        top: 0;
    }

    .bottom-container {
        display: flex;
        width: 100%;
        justify-content: center;
        position: absolute;
        bottom: 0;
    }

    .right-container {
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        right: 0;
    }

    .left-container {
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        left: 0;
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
        transform: rotate(180deg);
    }
</style>

