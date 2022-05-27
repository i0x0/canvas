import { onError, onMount } from "solid-js";
import TestComponent from "../testComponent";
import Engine from "./engine";

const Canvas = ({ width, height }: { width: number, height: number}) => {
  onMount(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    // const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    
    let engine = new Engine(canvas)
    let test = new TestComponent(engine)
    engine.addComponent(test)
    try { 
      engine.start()
    } catch (e: any) {
      // alert(e + `at ${e.stack}`)
      console.error(e)
    }
  })

  onError((e) => {
    alert(e)
  })

  return (
    <>
      <canvas width={width} height={height}>
        Game canvas
      </canvas>
    </>
  )


}

export default Canvas
