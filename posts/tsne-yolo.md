---
title: "t-SNE with YOLOv8 and BDD10k"
subtitle: "Visualizing Object Features with YOLOv8 in BDD10k dataset"
date: "2023-07-22"
---
### TLDR; What stage should we extract the features?

# Yolov8 Feature Extraction
The *YOLOv8* has a feature to **visualize** features extraction.
The result outputs a sequence of image that pertains to the "stages" of the model structure.
For reference, the model structure can be seen in the **Figure** section. 
There's also a `.npy` file accompanying the output. 
Additionally, the dataset for t-SNE has a uniform size. If the `crops` were to be plotted, there would a great difference.

The `tasks.py` within the **ultralytics** folder contains a function that regards to `feature_extraction`.
The code is as follows.
```python
if visualize:
    feature_visualization(x, m.type, m.i, save_dir=visualize)
```
The function `feature_visualization` outputs the result based on inputs.
The first task that was accomplish was identifying the given information.
`x` is a **tensor** while `m` contains information about the stages and index of the neural network.
The problem is **_what stage should we extract the features?_**

# The `x` variable example
```text
Type: <class 'torch.Tensor'>, Value: tensor([[[[ 1.4882e+01,  2.0230e+01,  2.0822e+01,  ...,  2.0740e+01,  2.1655e+01,  2.1504e+01],
          [ 7.1079e-01,  9.8847e-01,  8.6685e-01,  ...,  1.3650e+00,  1.3602e+00,  1.3610e+00],
          [ 7.3587e-01,  9.4592e-01,  1.1197e+00,  ...,  1.4363e+00,  1.2818e+00,  1.4737e+00],
          ...,
          [ 1.7922e+00,  3.8673e+00,  5.6660e+00,  ...,  6.0440e+00,  4.3878e+00,  3.2410e+00],
          [ 3.3760e+00,  4.9910e+00,  4.3521e+00,  ...,  4.5700e+00,  4.2533e+00,  3.8137e+00],
          [ 9.0538e-01,  2.0172e+00,  1.9349e+00,  ..., -1.2477e-01, -8.5764e-02, -2.5229e-01]],

         [[-3.8397e-02, -2.6115e-01, -2.7731e-01,  ..., -3.7837e-02, -1.2079e-01, -1.1603e-01],
          [-6.5275e-03, -2.1641e-01, -2.7563e-01,  ..., -9.4651e-02, -2.2387e-01, -2.0457e-01],
          [-6.5171e-03, -2.1589e-01, -2.7593e-01,  ..., -8.2383e-02, -2.3280e-01, -1.9945e-01],
          ...,
          [ 5.0527e-01, -6.0873e-02, -2.7804e-01,  ..., -4.9227e-02, -1.8929e-01, -5.9170e-02],
          [ 8.5820e-01,  7.3086e-03, -1.9580e-01,  ...,  2.1071e-02, -1.7928e-01, -2.5333e-01],
          [ 1.2676e+00, -1.9198e-01, -1.2263e-01,  ..., -7.5923e-02, -2.1452e-01, -1.7145e-01]],

         [[-2.5451e-01, -2.7358e-01, -2.6692e-01,  ..., -6.0942e-02, -5.7727e-02, -5.7829e-02],
          [-2.7612e-01, -2.0209e-01, -1.8612e-01,  ..., -1.9301e-01, -1.9656e-01, -1.9801e-01],
          [-2.7619e-01, -2.0233e-01, -1.8484e-01,  ..., -1.9281e-01, -1.9596e-01, -1.9782e-01],
          ...,
          [ 8.8195e-01,  7.8054e-01,  8.1251e-01,  ...,  1.4670e+00,  1.5199e+00,  1.5648e+00],
          [ 8.7282e-01,  9.4540e-01,  8.9406e-01,  ...,  1.2540e+00,  1.2998e+00,  1.2894e+00],
          [ 8.9321e-01,  9.0207e-01,  8.6929e-01,  ...,  1.2883e+00,  1.2765e+00,  1.2934e+00]],

         ...,

         [[ 3.9239e+00,  2.0684e+00,  2.0991e+00,  ...,  1.7521e+00,  1.5007e+00,  1.5263e+00],
          [ 2.9253e+00,  2.7279e+00,  2.9607e+00,  ...,  1.9449e+00,  1.9751e+00,  1.9594e+00],
          [ 2.9007e+00,  2.7515e+00,  3.0461e+00,  ...,  1.9185e+00,  1.9768e+00,  1.9474e+00],
          ...,
          [ 2.6437e+00,  2.5129e+00,  2.1269e+00,  ...,  1.1126e+00,  1.4230e+00,  1.3443e+00],
          [ 3.1617e+00,  1.1018e+00,  1.8911e+00,  ...,  1.4282e+00,  1.2167e+00,  1.7179e+00],
          [ 2.8262e+00,  1.3838e+00,  2.0866e+00,  ...,  1.3290e+00,  1.8480e+00,  1.7329e+00]],

         [[-5.8765e-02, -1.5614e-01, -2.1256e-01,  ..., -1.4250e-01, -1.7987e-01, -1.7140e-01],
          [-8.0442e-02, -1.2878e-01, -1.6108e-01,  ..., -1.4326e-01, -1.8215e-01, -1.7413e-01],
          [-6.9906e-02, -1.1628e-01, -1.5750e-01,  ..., -1.4369e-01, -1.8180e-01, -1.7557e-01],
          ...,
          [-1.1526e-02, -1.1619e-02, -4.5244e-03,  ..., -2.5389e-03, -1.7648e-03, -2.2187e-03],
          [-2.1797e-02, -3.9449e-02, -2.8767e-02,  ..., -1.4188e-02, -1.4488e-02, -3.5394e-03],
          [-1.3543e-01, -1.3615e-01, -1.0418e-01,  ..., -4.0844e-03, -4.5098e-03, -3.8204e-03]],

         [[ 1.6776e+01,  2.5452e+00,  1.2917e+00,  ...,  2.9656e+00,  8.5701e-01,  1.0543e+00],
          [ 2.0414e+01,  2.0920e+00,  1.8204e+00,  ...,  3.5632e+00,  8.9722e-01,  1.1777e+00],
          [ 2.0124e+01,  2.0665e+00,  1.9551e+00,  ...,  3.5150e+00,  9.4206e-01,  1.1792e+00],
          ...,
          [ 1.4814e+01,  4.3931e+00, -1.1155e-01,  ...,  1.2334e+00,  8.8359e-01,  1.3403e+00],
          [ 1.8071e+01,  3.5524e+00,  6.8780e-03,  ...,  1.2761e+00,  2.6019e-01, -2.7715e-01],
          [ 2.2366e+01, -1.1295e-01,  1.6845e+00,  ...,  1.2014e+00,  1.2263e+00,  5.9260e-01]]]], device='cuda:0')
```

# Figure
## YOLOv8 Model Structure
![YOLOv8 model architecture](https://user-images.githubusercontent.com/27466624/239739723-57391d0f-1848-4388-9f30-88c2fb79233f.jpg)
## Feature Extraction: `SPPF` Stage
![SPPF_Stage_9](images/stage9_SPPF_features.png)