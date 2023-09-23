---
title: "Creating Adversary Attacks with Overlapping Objects"
subtitle: "Research paper draft"
date: "2023-09-15"
---

---

**Name**: Luzzitto Rob F. Tupaz

**Department**: School of Cybersecurity

**Institution**: Old Dominion University

**Contact**: [ltupa001@odu.edu](mailto:ltupa001@odu.edu)

---

# Abstract

# Introduction
The experiment started off with a Jetson Nano. 
The task was running the nano model of YOLOv5.
Issues arise as steps were taken.
The first was compatability error with hardware and software.
The YOLOv5 runs on Python 3.6 and above.
The Jetson Nano, however, needs Python 3.5.
It was a constant struggle in getting both version to integrate.
Overcoming the hurdle introduce a new problem, library issues.
Jetson Nano has a Graphics Processing Unit (GPU).
There are libraries that YOLOv5 needs to execute the `detect.py` program.
One of which is PyTorch.
PyTorch is a machine learning framework. 
Using GPU with PyTorch requires the program to interact with Compute Unified Device Architecture (CUDA).
A simple check was done to see if CUDA can be utilized by PyTorch. 

```bash
python -c "import torch;print(torch.cuda.is_available())"
```

The command would output `True` if the GPU can be used or `False` for the opposite. 
The output often results to False.
However, through various queries online, we were able to properly install and execute YOLOv5 on Jetson Nano.

The test in YOLOv5 consists of showcasing everyday items.
The interesting part was that an unknown object that resembles learned data is detected by YOLOv5 (see Figure below). 
![Jetson Nano Output](/images/first_output_jetson_nano.png)
The *disco light* was inferred as a *traffic light*. In personal regards, this event has raised a question. The inference of a model result in misclassification. Misclassification can have a major impact on the effectiveness of the model. Thus, we journey for a research of adversary attacks.

In formal definition, adversary attack is an attack that affects the performance of the model. 
The next objective was to research and formulate adversary attack. 
Two research papers were chosen to help with formulating an adversary attack: *Clean-Image Backdoor* and *Composite Backdoor Attack*.

The *Clean-Image Backdoor* is an adversary attack that poison the labels. 
According to the researchers, attacking the labels is more practical for threat agents to execute rather than implementing a backdoor from manipulation of inputs.
This attack success rate is high and was tested against state-of-the-art (SOTA) defenses for machine learning.
The effectiveness and simpleness qualifies in formulating an adversary attack.
The problem is extending the current research.
Expanding the existing research allows research to reach higher heights.
We resort to simulating adversary attacks on a workstation. However, we implement the *Clean-Image Backdoor* later as a back up resort in case our primary attack malfunctions.

We used a clean model and overlay objects to demonstrate the possibility of misclassification.
The result ended in failure.
However, upon further online queries for adversary attack, we come across *Composite Backdoor Attack*.
The *Composite Backdoor Attack* is an adversary attack that create a trojaned model.
The trojan model contains an attack activated by a special condition, the trigger.
The trigger for the *Composite Backdoor Attack* is when two objects, Object A and Object B, is present and classified as Object C.
In layman terms, two entities is combined as one object but presented as another category.
However, on the event where Object A and Object B are present at different times, the model recognize both objects on their respective events.

The composite backdoor attack aligns with our goal in creating adversary attack.
The attack exists but there's not much information as to why the attack work.
Thus, shifting our topic in proving the effectiveness of the attack.
We modified the method of the attack to fit our criteria.

The *Composite Backdoor Attack* used object detection.
However, to better understand the attack, we opted for segmentation.
Object Detection and Segmentation are alike with minor modification.
Segmentation models understand the object since the data provided is solely the object.
On the other hand, object detection dataset integrate the object within an environment.

The second modification is the scenario.
*Composite Backdoor Attack* utilized facial recognition to prove their attack success.
For our research, we utilized a driving scenario where overlaps between object occur numerous times.
Switching to a different scenario allows us to raise awareness toward autonomous vehicles and enhance the case for overlaps.

We used a clean model for classifying objects to determine the likeliness of overlaps.
The software allow us to extract the object features for instance per class.
We utilized the object feature to be illustrated in t-Distributed Stocastic Neighbor Embedding (t-SNE).
t-SNE is a dimension reducing algorithm that visualize object feature to a smaller dimension. 
The outcome is discussed and analysed at their respective section in the paper.

The t-SNE overlaps provide the necessary information in overlaying objects.
The strategy for *Composite Backdoor Attack* is random.
In other words, there was no reason why two faces were chosen and inferred as a separate face.
In our case, we utilize t-SNE to determine the possibility of overlap in object features.
The overlap will provide objects commonalities allowing our attack to be efficient.

t-SNE result allows us to infer the model visualization. 
The model identifies the similarities between objects and output information as numerical value.
The value of object features is not perceiveable by humans. 
However, t-SNE visualize the likeliness of objects by the distance.

# Methodology
## Software and Tools
### Hardware
The machine we used in traning the model is provided by Old Dominion University High Performance Computing called Wahab. 
The machine specification is as follows: Intel(R) Xeon(R) Gold 6130 CPU @ 2.10 GHz, an NVIDIA Tesla V100 SXM2 16 GB, 196 GB of memory, and Rocky Linux. 
The device information was extracted using Bash Script. 
The script execution is based on request basis. 
Thus, the result for experiments may differ since the resource is shared with other people. 
For example, the 196 GB of memory is shared among many other users who is utilizing the machine at the time. 
Thus, various factors may affect the result of the model.
However, the only thing that can be measured is memory peak.
This would describe how many allocated memory is used.

### Software
The software used for this experiment is by Ultralytics Team.
The software has been modified over years allowing YOLO to earn the title of State-Of-The-Art (SOTA).
The software includes a variety of programs that performs the basic necessity for machine learning.

The program includes pre-trained models, training, evaluation, and prediction.
The pre-trained model contains general models trained on COCO dataset.
The categorty count of 80 class lists everyday items such as toothbrush, apple, and more.
The remaining program are described by their name. 
They are general functions necessary to execute YOLO models.

## Attack Workflow

## Backbone Model and Dataset
### Backbone Model

![YOLOv8 Architecture Provided By Github User RangeKing](/images/yolo_architecture.jpg)

The Ultralytics Team has yet to publish their research paper for YOLOv8.
However, a Github User, [RangeKing](https://github.com/ultralytics/ultralytics/issues/189), released an unofficial visualization of the architecture of the YOLO.
The image is subject to change since the models contains various sizes.
The architecture feature a variety of methods that defines the structure of YOLO.
For example, they integrated the [Feature Pyramid Networks for Object Detection](https://arxiv.org/abs/1612.03144).
The Feature Pyramid Network, or FPN, is a "high-level semantic feature maps at all scales (Reference)."
In summary, the FPN takes an image and extract features from top-down approach.

The YOLO models can be flexible.
As previously stated, the models have various sizes: nano (n), small (s), medium (m), large (l), and extra (x). 
This was possible by [EfficientDet: Scalable and Efficient Object Detection](https://arxiv.org/abs/1911.09070).
The EfficientDet introduce a concept called **compound scaling** which allows models to be scaled creating a family of models. 

By scaling the model, the model accuracy and latency are affected.
This would mean that the choice of device is limited to model size (see image below).
We selected the biggest model, extra (x), to attain the best accuracy for object feature visualization.

![yolo-comparison-plots](/images/yolo-comparison-plots.png)

### Dataset
The dataset we choose was the Berkeley Deep Drive Dataset.
The dataset contains a significant amount of dashcams images extracted from footages.
Additionally, the media is seperated for various tasks.
In our case, we utilized the **10k Images** with **Instance Segmentation** labels.

The dataset is limited to their respective tasks.
For example, the **100k Images** is used for "object detection, drivable area, lane marking [source](https://doc.bdd100k.com/download.html)."
We are using segmentation which corresponds to **10k Images** dataset.
The BDD10k dataset contains 10 thousands images in total.
Furthermore, it is separated into 3 folders: train, val(idation), and test.
The ratio regarding the separation is 7:2:1, respectively.

### Model Evaluation
The evaluation method used by YOLO is mAP, or mean Average Precision.
A mixture of methods consists the mAP.
The mAP score ranges from 0 to 1, where 1 is the highest.
The YOLO segmentation extra model has a mAP score of 43.4 or 0.434, in masking.

The mAP score of our model is 32.2. Our custom trained model is above than the nano YOLO segmentation model with 30.5 in mask.

# Analysis
![Object Feature Extraction T-SNE Result](/images/improve_tsne.png)

The outcome for t-SNE is illustrated above.
The obvious overlap is between Object A and Object B.
The overlap occurs at least 3 times.
The significance of this outcome allows us to draw conclusion as their respective description shows a similarity.


# Discussion
There were various challenged faced as the research project ventured.
The first is model accuracy.
The expected mAP score is roughly 40 but