const express = require('express');
const router = express.Router();

router.get('/api/dashboard/stats', async (req, res) => {
  try {
    // Replace with actual database queries
    const totalClients = await Client.count();
    const activeClients = await Client.count({ where: { status: 'active' } });
    const inactiveClients = await Client.count({ where: { status: 'inactive' } });
    const totalApplications = await JobApplication.count();

    res.json({
      totalClients,
      activeClients,
      inactiveClients,
      totalApplications
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
});

router.get('/api/dashboard/client-report', async (req, res) => {
  try {
    // Replace with actual database queries
    const newLeads = await Client.count({ where: { status: 'lead' } });
    const agreementSubmitted = await Client.count({ 
      where: { agreementStatus: 'submitted' } 
    });

    res.json({
      newLeads,
      agreementSubmitted
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch client report' });
  }
});

module.exports = router;