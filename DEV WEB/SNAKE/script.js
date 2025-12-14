window.onload = function() 
{
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var canvas, ctx;
    var delay = 400;
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
        snakee = new Sanke([[6,4], [5,4], [4,4]], "down");
        refreshCanvas();
        
    }

    function refreshCanvas(){

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas, delay);
    }

    function drawBlock(ctx, position)
    {
        var x = position[0] * blockSize; 
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
    
    
    function Sanke(body, direction)
    {
        this.body = body;
        this.direction = direction;
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
        
        this.advance = function()
        {
            var nextPosition = this.body[0].slice();
            switch(this.direction)
            {
                case "right":
                    nextPosition[0] += 1;
                    break;
                case "left":
                    nextPosition[0] -= 1;
                    break;
                case "down":
                    nextPosition[1] += 1;
                    break;    
                case "up":
                    nextPosition[1] -= 1;
                    break;
                    
            }
            this.body.unshift(nextPosition);
            this.body.pop();
            
        };

        this.setDirection = function(newDirection){
            var allowedDirections;
            switch(this.direction)
            {
                case "left":
                case "right":
                    allowedDirections = ["up", "down"];
                    break;
                case "up":
                case "down":
                    allowedDirections = ["left", "right"];
                    break;
                default:
                    throw("Invalid Direction");
            }
            if(allowedDirections.indexOf(newDirection) > -1)
            {
                this.direction = newDirection;
            }
        };

    }

    document.onkeydown = function handleKeyDown(e)
    {
        var key = e.keyCode;
        var newDirection;
        switch(key)
        {
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;
            default:
                return;
        }
        snakee.setDirection(newDirection);
    }   

}