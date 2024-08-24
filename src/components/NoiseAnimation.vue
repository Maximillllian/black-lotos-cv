<template>
    <svg id="svg_noise">
        <filter id="filter_noise">
            <feTurbulence
                type="turbulence"
                baseFrequency="0 0"
                numOctaves="1"
                result="warp"
            />
            <feDisplacementMap
                scale="60"
                in="sourceGraphic"
            />
            <!-- in="warp" -->
        </filter>
    </svg>
</template>