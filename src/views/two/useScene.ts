import { ref } from 'vue';
import { Engine, Scene, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight, ArcRotateCamera, Sound } from "@babylonjs/core";

const useScene = () => {

  const bjsCanvas = ref<HTMLCanvasElement | null>(null);

  /**
   * 需要一个场景（Scene）来包含该世界或模型，一台用于查看该世界或模型的摄像头（Camera），一个照明它的照明灯（Light），
   * 以及至少一个可视对象作为一个对象。
   * 所有模型，无论是一个简单的盒子还是复杂的人物角色，都是由三角形或四边形的网格（Mesh）组成的。
   * 网格（Mesh）是物体的基本组成单位。
   */
  const createScene = () => {
    if (!bjsCanvas.value) return;
    //  创建 babylonjs 3D 引擎
    const engine = new Engine(bjsCanvas.value);
    // 初始化一个场景
    const scene = new Scene(engine);

    // 弧度旋转相机
    const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 15, new Vector3(0, 0, 0), scene);
    camera.attachControl(bjsCanvas.value, true);

    new HemisphericLight("light", new Vector3(1, 1, 0), scene);

    const box = MeshBuilder.CreateBox("box", { width: 3, height: 3, depth: 3 }, scene);
    // 创建地面
    const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 });
    // 设置 box 和地面的位置，默认为 0.5
    box.position.y = 1;
    // 添加声音或者音乐
    const sound = new Sound("name", "mp3/11.wav", scene, null, { loop: true, autoplay: true });
    sound.play();
    // const material = new StandardMaterial("box-material", scene);

    // material.diffuseColor = Color3.Blue();
    // box.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });
  };

  return { bjsCanvas, createScene }
}

export default useScene;
