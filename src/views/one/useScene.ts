import { ref } from 'vue';
import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from "@babylonjs/core";

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

    // 自由类型的相机
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(bjsCanvas.value, true);

    new HemisphericLight("light", Vector3.Up(), scene);

    const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
    const material = new StandardMaterial("box-material", scene);

    material.diffuseColor = Color3.Blue();
    box.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });
  };

  return { bjsCanvas, createScene }
}

export default useScene;
