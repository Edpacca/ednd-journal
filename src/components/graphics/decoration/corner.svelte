<script lang="ts">
    export let position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    export let colour: string = "black";
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.209 126.209" style="stroke:{colour}" class="corner {position}">
    <g>
        <rect style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" width="27.705" height="27.705" x="11.314" y="9.496" ry="0"/>
        <rect style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" width="31.981" height="31.981" x="22.614" y="20.797" ry="0"/>
        <path style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M7.914 125.084V75.3h29.905v19.51l-15.235 12.028v-42.63h43.699M127.158 5.84H77.375v29.904h19.51l12.027-15.234h-42.63v43.698"/>       
    </g>
</svg>


<style>
    .corner {
        height: max(20vh, 20vw);
        position: absolute;
    }

    .top-left {
        top: var(--corner-padding);
        left: var(--corner-padding);
    }
    .top-right {
        top: var(--corner-padding);
        right: var(--corner-padding);
        transform: rotate(90deg);
    }
    .bottom-left {
        bottom: var(--corner-padding);
        left: var(--corner-padding);
        transform: rotate(270deg);
    }
    .bottom-right {
        bottom: var(--corner-padding);
        right: var(--corner-padding);
        transform: rotate(180deg);
    }
</style>