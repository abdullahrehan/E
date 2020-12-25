//Variables for setup

let container, camera, renderer, scene, house;

function init() {
  
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(112,42.5, 282.5);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(000000, 2);
  light.position.set(50, 50, 100);
  scene.add(light);
  

  //Renderer
  
  renderer = new THREE.WebGLRenderer({ antialias: true});
  renderer.setSize(container.clientWidth/4, container.clientHeight/4  
    
    
    
    
    
    
    );
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./house/g/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    house.position.x=94.022;
    house.position.y=4.022;
    house.position.z=7.022;
    

    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
