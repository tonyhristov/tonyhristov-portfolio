const spawnDots = (canvas, ctx) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [],
        FPS = 60,
        x = 150,
        mouse = {
            x: 0,
            y: 0,
        };

    for (let i = 0; i < x; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + Math.floor(Math.random() * 10),
            color: `#00c4cc`,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = 'lighter';

        for (let i = 0, x = dots.length; i < x; i++) {
            const s = dots[i];

            ctx.fillStyle = `${s.color}`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'black';
            ctx.stroke();
        }

        ctx.beginPath();
        for (let i = 0, x = dots.length; i < x; i++) {
            const starI = dots[i];
            ctx.moveTo(starI.x, starI.y);
            if (distance(mouse, starI) < 100) ctx.lineTo(mouse.x, mouse.y);
            for (let j = 0, x = dots.length; j < x; j++) {
                const starII = dots[j];
                if (distance(starI, starII) < 100) {
                    ctx.lineTo(starII.x, starII.y);
                }
            }
        }

        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }

    function distance(point1, point2) {
        let xs = 0;
        let ys = 0;

        xs = point2.x - point1.x;
        xs = xs * xs;

        ys = point2.y - point1.y;
        ys = ys * ys;

        return Math.sqrt(xs + ys);
    }

    function update() {
        for (let i = 0, x = dots.length; i < x; i++) {
            const s = dots[i];

            s.x += s.vx / FPS;
            s.y += s.vy / FPS;

            if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
            if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
    }

    canvas.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function tick() {
        draw();
        update();
        requestAnimationFrame(tick);
    }

    tick();
};

export default spawnDots;
