export function animate ({duration,draw,timing,bo}) {
    let start=performance.now();
    requestAnimationFrame(
        function n1(){
            let progress;
            if (bo)
            {progress=(performance.now()-start)/duration;
                if (progress>1) progress=1;}
            else {progress=(performance.now()-start)/duration;
                if (progress>=1) {start=performance.now();progress=0;}}
            let z=timing(progress);
            draw(z);
            if (progress<1) requestAnimationFrame(n1);
        }
    )
}