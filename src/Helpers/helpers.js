const textShortener = (text, length) => {

    

    let newText = text.slice(0, length);

    // console.log(newUrlArray)

    // newUrlArray.push('...');

    // let newUrl = newUrlArray.join('');

    return newText + '...';
}

export {textShortener}