document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("solarSystem")
    const ctx = canvas.getContext("2d")

    const width = canvas.width
    const height = canvas.height

    const celestialBodies = [
        { name: "Sun", color: "#FDB813", size: 70, position: 100 },
        { name: "Mercury", color: "#B7B8B9", size: 10, position: 250 },
        { name: "Venus", color: "#E7CDCD", size: 15, position: 350 },
        { name: "Earth", color: "#267EF6", size: 16, position: 450 },
        { name: "Mars", color: "#C1440E", size: 14, position: 550 },
        { name: "Jupiter", color: "#C88B3A", size: 40, position: 680 },
        { name: "Saturn", color: "#E4D191", size: 35, position: 820, hasRings: true },
        { name: "Uranus", color: "#B5E3E3", size: 25, position: 950 },
        { name: "Neptune", color: "#3E66F9", size: 24, position: 1080 },
    ]

    const drawObject = (body) => {
        ctx.fillStyle = body.color
        ctx.beginPath()
        ctx.arc(body.position, height / 2, body.size, 0, Math.PI * 2)
        ctx.fill()

        if (body.hasRings) {
            ctx.strokeStyle = "#D4B76A"
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.ellipse(body.position, height / 2, body.size + 15, 5, 0, 0, Math.PI * 2)
            ctx.stroke()
        }

        ctx.fillStyle = "#FFFFFF"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"
        ctx.fillText(body.name, body.position, height / 2 + body.size + 25)
    }

    const drawSolarSystem = () => {
        ctx.clearRect(0, 0, width, height)

        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, width, height)

        celestialBodies.forEach(drawObject)
    }

    drawSolarSystem()
})

