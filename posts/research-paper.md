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
It was a constant struggle in getting both version to combine.
Overcoming the hurdle introduce a new problem, library issues.
Jetson Nano has a Graphics Processing Unit (GPU).
There are libraries that YOLOv5 needs to execute the `detect.py` program.
One of which is PyTorch.
Using GPU with PyTorch requires the program to interact with Compute Unified Device Architecture (CUDA).
A simple check was done to see if CUDA can be used with PyTorch, `python -c "import torch;print(torch.cuda.is_available())"`. The command would output `True` if the GPU can be used or `False` for the opposite. 
The output often results to False.
However, through various queries online, we were able to execute YOLOv5 on Jetson Nano.

The test in YOLOv5 consists of showing everyday items.
The interesting part was that an unknown object that resembles learned data is detected by YOLOv5 (see Figure below). 
![Jetson Nano Output](/images/first_output_jetson_nano.png)
The *disco light* was inferred as a *traffic light*. In personal regards, this event has raised a question. The inference of a model result in misclassification. Misclassification can have a major impact on the effectiveness of the model. Thus, a journey of research for adversary attack begun.

In formal definition, adversary attack is an attack that affects the performance of the model. 
The next task was to research and formulate adversary attack. 
Two research papers were chosen to help with formulating an adversary attack: *Clean-Image Backdoor* and *Composite Backdoor Attack*.

The *Clean-Image Backdoor* is an adversary attack that poison the labels. 
According to the researchers, attacking the labels is more practical for threat agents to execute rather than implementing a backdoor from model training.
This attack success rate is high and was tested against state-of-the-art (SOTA) defenses for machine learning.
The effectiveness and simpleness qualifies in formulating an adversary attack.
The problem is extending the current research.
Expanding the existing research allows research to reach higher heights.
We resort to simulating adversary attacks on a workstation.

We used a clean model and overlay objects to demonstrate the possibility of misclassification.
The result ended in failure.
However, upon further online queries for adversary attack, we come across *Composite Backdoor Attack*.
The *Composite Backdoor Attack* is an adversary attack that create a trojaned model.
The trojan model contains an attack activated by a special condition, the trigger.
The trigger for the *Composite Backdoor Attack* is when two objects, Object A and Object B, is present and classified as Object C.
Two entities is combined as one object.
However, on the event where Object A and Object B are present at different times, the model recognize both objects on their respective events.

The composite backdoor attack aligns with our goal in creating adversary attack.
The attack exists but there's not much information as to why the attack work.
Thus, shifting our topic in proving the effectiveness of the attack.
We modified the method of the attack to fit a criteria.

The *Composite Backdoor Attack* used object detection.
However, to better understand the attack, we opted for segmentation.
Object Detection and Segmentation are alike with minor modification.
Segmentation models understand the object since the data provided is solely the object.
On the other hand, object detection dataset integrate the object within an environment.

The second modification is the scenario.
*Composite Backdoor Attack* utilized object detection to prove their attack success.
For our research, we utilized a driving scenario where overlaps between object occur numerous times.
Switching to a different scenario allows us to raise awareness toward autonomous vehicles and enhance the case for overlaps.

We used a clean model for classifying objects to determine the likeliness of overlaps.
The software allow us to extract the object features for instance per class.
We utilized the object feature to be illustrated in t-Distributed Stocastic Neighbor Embedding (t-SNE).
t-SNE is a dimension reducing algorithm that visualize object feature to 2 dimensional. 
The outcome is discussed in Analysis section of this paper.

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
The software has been modified over the course of years.
The service it provide allows numerous users to learn about its product.
The significance of their software has allowed the ultralytics team to call their software **State-Of-The-Art (SOTA)**

## Attack Workflow

## Backbone Model and Dataset
### Backbone Model

![YOLOv8 Architecture Provided By Github User RangeKing](/images/yolo_architecture.jpg)
### Dataset
The dataset we choose was the Berkeley Deep Drive Dataset.
The dataset contains a significant amount of dataset.
Their dataset consists of videos and images.
Additionally, the media is seperated for various tasks.

We are using segmentation which corresponds to BDD10k dataset.
The BDD10k dataset contains 10 thousands images.
Furthermore, it is separated into 3 pieces: training, validation, and testing.
The ratio regarding the separation is 7:2:1, respectively.

### Model Evaluation

# Analysis
![Object Feature Extraction T-SNE Result](/images/improve_tsne.png)

The outcome for t-SNE is illustrated above.
The obvious overlap is between Object A and Object B.
The overlap occurs at least 3 times.

# Discussion

# References
