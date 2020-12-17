# this script is just to make a chart
import json
import matplotlib.pyplot as plt

'''
with open('/home/giustinosulpizio/git/Cheminfo/global-spectral-deconvolution/examples/dy.JSON', 'r') as myfile:
    data = myfile.read()
dY = json.loads(data)

with open('/home/giustinosulpizio/git/Cheminfo/global-spectral-deconvolution/examples/ddy.JSON', 'r') as myfile:
    data = myfile.read()
ddY = json.loads(data)

x = dY['x']

fig, ax1 = plt.subplots()

color = 'tab:red'
ax1.set_xlabel('temperature')
ax1.set_ylabel('first derivative', color=color)
ax1.plot(x, dY['y'], color=color)
ax1.tick_params(axis='y', labelcolor=color)

ax2 = ax1.twinx()  # instantiate a second axes that shares the same x-axis

color = 'tab:blue'
# we already handled the x-label with ax1
ax2.set_ylabel('second derivative', color=color)
ax2.plot(ddY['x'], ddY['y'], color=color)
ax2.tick_params(axis='y', labelcolor=color)

'''
with open('/home/giustinosulpizio/git/Cheminfo/global-spectral-deconvolution/examples/y.JSON', 'r') as myfile:
    data = myfile.read()
derivativeData2 = json.loads(data)

'''
ax3 = ax2.twinx()  # instantiate a second axes that shares the same x-axis

color = 'tab:green'
# we already handled the x-label with ax1
ax3.set_ylabel('data', color=color)
ax3.plot(derivativeData2['x'], derivativeData2['y'], color=color)
ax3.tick_params(axis='y', labelcolor=color)


fig.tight_layout()  # otherwise the right y-label is slightly clipped
plt.show()
'''
plt.plot(derivativeData2['x'], derivativeData2['y'])
plt.show()
