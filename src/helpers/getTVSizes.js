export function getTVSizes(tv) {
    let sizes = tv.availableSizes;
    let output = '';

    for (let i = 0; i < sizes.length; i++) {
        const currentSizeInches = sizes[i];
        const currentSizeCm = Math.round(sizes[i] * 2.54);

        output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        if (i < sizes.length - 1) {
            output = `${output} | `;
        }
    }
    return output;
}
