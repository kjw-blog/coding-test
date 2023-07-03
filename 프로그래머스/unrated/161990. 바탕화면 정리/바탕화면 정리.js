function solution(wallpaper) {
    const height = wallpaper.length+1;
    const width = wallpaper[0].length+1;
    
    const sy = wallpaper.findIndex(item => item.includes('#'));
    const sx = wallpaper.reduce((a,b) => {
        const idx = b.indexOf('#');
        
        if(idx === -1) return a
        
        return idx < a ? idx : a
    } ,width);

    const ey = wallpaper.reduce((a,b,idx) => {
        return b.includes('#') ? idx : a
    },0) + 1
    
    const ex = wallpaper.reduce((a,b) => {
        const idx = b.lastIndexOf('#');

        if(idx === -1) return a
        
        return idx > a ? idx : a
    } ,0) + 1;
    
    return [sy,sx,ey,ex];
}