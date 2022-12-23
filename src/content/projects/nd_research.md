### Overview

Maybe unsurprisingly, contactless fingerprinting has regained plenty of attention in recent times. Efforts to study contactless fingerprinting are motivated by a need for more hygienic (touchless) and unconstrained -- not requiring specialized sensors -- fingerprint recognition methods. However, switching to a contactless capture style and recognition system present a real-world implication on previous databases, such as large longitudinal fingerprint databases that use contact-based scanners delivering ISO-compliant images. 

In particular, traditional contact-based fingerprints display unique minutiae displacement in records due to skin distortion from contact with the scanner. These skin distortions do not exist in contactless samples. In turn, contactless images are less predictable in terms of background, fingerprint inter-ridge resolution, overall image quality and scale. These aspects limit the interoperability between these two types of scanning. 

In this study, we proposed an end-to-end method that converts contactless fingerprints videos acquired by a smartphone to ISO-compliant 2D fingerprints. It includes:
- deep learning-based fingerprint video segmentation to address unconstrained acquisition using a transfer-learned [Detectron2](https://github.com/facebookresearch/detectron2),
- NFIQ-based quality assessment to select the best stereo image pair,
- deep learning-based finger depth estimation from a stereo pair used to compensate for skin distortions present in case of flat imprints using [SfM-Net](https://arxiv.org/abs/1704.07804),
- image intensity transformation to enhance ridges and valleys in fingerprint image,
- and geometrical transformation to normalize the inter-ridge distance and to simulate flattening of a finger when placed on a tranditional 2D scanner.

We collected an original 3D video and 2D image fingerprint dataset during this study. We apply a self-supervised stereo depth estimation model for the purpose of reconstructing the 3D shape of a finger from video. The estimated 3D shapes are then used to unroll contactless samples to their 2D counterparts to increase topological similarity between ISO- compliant flat imprints and reconstructed contactless samples. The inter-ridge normalization is additionally proposed in order to bring all reconstructed samples close to ISO-compliant and stable resolution, independently of the finger-to-camera distance. Our proposed reconstruction method is formulated on an original contactless-to-contact database collected in house and tested on still images from a publicly available contactless-to-contact database.

This work remains private.
