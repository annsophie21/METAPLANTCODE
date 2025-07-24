const nodes = document.querySelectorAll('.project-node');
const tooltip = document.getElementById('tooltip');
const title = document.getElementById('tooltip-title');
const desc = document.getElementById('tooltip-description');
const link = document.getElementById('tooltip-link');
const svg = document.querySelector('.network-lines');

let activeNode = null;

// Position tooltip on click
nodes.forEach(node => {
  node.addEventListener('click', (e) => {
    e.stopPropagation();
    const rect = node.getBoundingClientRect();
    const containerRect = node.parentElement.getBoundingClientRect();

    title.textContent = node.dataset.title;
    desc.textContent = node.dataset.description;
    link.href = node.dataset.link;

    tooltip.style.left = `${node.offsetLeft + node.offsetWidth / 2}px`;
    tooltip.style.top = `${node.offsetTop}px`;
    tooltip.classList.remove('hidden');

    activeNode = node;
  });
});

// Hide tooltip if clicking outside
document.addEventListener('click', () => {
  tooltip.classList.add('hidden');
});

// Draw connecting lines
function drawLines() {
  svg.innerHTML = '';
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const n1 = nodes[i];
      const n2 = nodes[j];
      const x1 = n1.offsetLeft + n1.offsetWidth / 2;
      const y1 = n1.offsetTop + n1.offsetHeight / 2;
      const x2 = n2.offsetLeft + n2.offsetWidth / 2;
      const y2 = n2.offsetTop + n2.offsetHeight / 2;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      line.setAttribute("stroke", "#1ca4a6");
      line.setAttribute("stroke-width", "2");
      svg.appendChild(line);
    }
  }
}

window.addEventListener('load', drawLines);
window.addEventListener('resize', drawLines);
