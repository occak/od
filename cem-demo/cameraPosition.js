AFRAME.registerComponent('rotation-reader', {
  tick: (function () {
    // var position = new THREE.Vector3();
    var rotQuaternion = new THREE.Quaternion();
    var rotMatrix4 = new THREE.Matrix4();
    var rotMatrix3 = new THREE.Matrix3();

    rotQauternion = this.el.object3D.getWorldQuaternion(rotQuaternion);
    rotMatrix4 = rotMatrix4.makeRotationFromQuaternion(rotQuaternion);
    rotMatrix3 = rotMatrix3.setFromMatrix4(rotMatrix4);

    console.log(rotMatrix3);
  }
  )});