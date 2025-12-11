window.onload = function() 
{
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var canvas, ctx;
    var delay = 1000;
    var snakee;

    init();

    function init() 
    {

        canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid black";
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
        snakee = new Sanke([[6,4], [5,4], [4,4]]);
        refreshCanvas();
        
    }

    function refreshCanvas(){

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snakee.draw();
        setTimeout(refreshCanvas, delay);
    }

    function drawBlock(ctx, position)
    {
        var x = position[0] * blockSize; 
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
    function Sanke(body)
    {
        this.body = body;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i=0; i < this.body.length; i++)
            {
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };
    }

}